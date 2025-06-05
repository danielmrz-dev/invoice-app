import { Component } from '@angular/core';
import { SidenavService } from '../../shared/services/sidenav.service';
import { InvoiceFormController } from './invoice-form-controller';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { concatMap, Observable, of } from 'rxjs';
import { FormType } from '../../shared/models/form-type.type';
import { InvoicesService } from '../../shared/services/invoices.service';
import { NgxMaskDirective } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { Invoice, InvoiceStatus } from '../../shared/models/invoice.interface';
import { EmailValidatorDirective } from '../../shared/validators/email-validator.directive';
import { UppercaseDirective } from '../../shared/directives/uppercase.directive';
import { MinItemsValidatorDirective } from '../../shared/directives/min-items-validator.directive';
import { OnlyLettersDirective } from '../../shared/directives/only-letters.directive';
import { MinQtyOrPriceDirective } from '../../shared/directives/min-qty-or-price.directive';
import { MinCharactersDirective } from '../../shared/directives/min-characters.directive';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective, MatSelectModule, EmailValidatorDirective, UppercaseDirective, MinItemsValidatorDirective, OnlyLettersDirective, MinQtyOrPriceDirective, MinCharactersDirective],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.scss'
})
export class InvoiceFormComponent extends InvoiceFormController {

  formType!: FormType;
  invoiceId: string = '';
  invoice: Invoice = {} as Invoice;
  textMask = 'A*';
  customPatterns = {
    'A': { pattern: new RegExp('[a-zA-ZÀ-ú ]') }
  }
  isDarkThemeActive$: Observable<boolean> = of();

  constructor(
    private readonly sidenavService: SidenavService,
    private readonly invoicesService: InvoicesService,
    private readonly location: Location,
    private readonly activatedRoute: ActivatedRoute,
    private readonly themeService: ThemeService,
    readonly formBuilder: FormBuilder,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    this.isDarkThemeActive$ = this.themeService.isDarkThemeActive$;
    this.form.markAsUntouched();
    this.formType = this.activatedRoute.snapshot.data['form'];
    this.activatedRoute.params.pipe(
      concatMap((params) => {
        this.invoiceId = params['id'];
        return this.invoicesService.getInvoiceById(params['id']);
      })
    ).subscribe((invoice) => {
      if (invoice) {
        this.invoice = invoice;
      }
      if (this.formType === 'edit') {
        this.form.patchValue({
          createdAt: invoice?.createdAt,
          paymentDue: invoice?.paymentDue,
          description: invoice?.description,
          paymentTerms: invoice?.paymentTerms,
          clientName: invoice?.clientName,
          clientEmail: invoice?.clientEmail,
          status: invoice?.status,
          senderAddress: {
            street: invoice?.senderAddress.street,
            city: invoice?.senderAddress.city,
            postCode: invoice?.senderAddress.postCode,
            country: invoice?.senderAddress.country,
          },
          clientAddress: {
            street: invoice?.clientAddress.street,
            city: invoice?.clientAddress.city,
            postCode: invoice?.clientAddress.postCode,
            country: invoice?.clientAddress.country,
          },
          total: invoice?.total
        })

        invoice?.items.forEach((item) => {
          item.total = item.price * item.quantity;
          return this.addNewItem(item)
        });

      }
    })
  }

  createNewInvoice(status: InvoiceStatus) {
    this.invoicesService.createNewInvoice(this.form.value, status);
    this.location.back();
    this.sidenavService.closeSidenav();
  }

  closeSidenav() {
    this.location.back();
    this.sidenavService.closeSidenav();
  }

  discardChangesAndClose() {
    this.form.reset();
    this.items.clear();
    this.location.back();
    this.sidenavService.closeSidenav();
  }

  editInvoice(id: string) {
    this.invoicesService.editInvoice(id, this.form.value);
    this.location.back();
    this.sidenavService.closeSidenav();
  }

}
