import { Component } from '@angular/core';
import { SidenavService } from '../../shared/services/sidenav.service';
import { InvoiceFormController } from './invoice-form-controller';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { concatMap } from 'rxjs';
import { FormType } from '../../shared/models/form-type.type';
import { InvoicesService } from '../../shared/services/invoices.service';
import { formatDate } from '../../utils/format-date';
import { NgxMaskDirective } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { Invoice } from '../../shared/models/invoice.interface';
import { createInvoiceObj } from '../../utils/create-invoice-obj';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective, MatSelectModule],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.scss'
})
export class InvoiceFormComponent extends InvoiceFormController {

  formType!: FormType;
  invoiceId: string = '';
  invoice: Invoice = {} as Invoice;

  constructor(
    private readonly sidenavService: SidenavService,
    private readonly invoicesService: InvoicesService,
    private readonly location: Location,
    private readonly activatedRoute: ActivatedRoute,
    readonly formBuilder: FormBuilder,
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
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
          billFrom: {
            street: invoice?.senderAddress.street,
            city: invoice?.senderAddress.city,
            postCode: invoice?.senderAddress.postCode,
            country: invoice?.senderAddress.country,
          },
          billTo: {
            clientName: invoice?.clientName,
            clientEmail: invoice?.clientEmail,
            clientStreet: invoice?.clientAddress.street,
            clientCity: invoice?.clientAddress.city,
            postCode: invoice?.clientAddress.postCode,
            country: invoice?.clientAddress.country,
            invoiceDate: formatDate(invoice?.createdAt),
            paymentTerms: invoice?.paymentTerms,
            projectDescription: invoice?.description,
          },
        })
        invoice?.items.forEach(item => this.addNewItem(item));
      }
    })
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
    this.invoicesService.editInvoice(id, {
      senderAddress: {
        street: this.street.value,
        city: this.city.value,
        postCode: this.postCode.value,
        country: this.country.value,
      },
      clientAddress: {
        street: this.clientStreet.value,
        city: this.clientCity.value,
        postCode: this.clientPostCode.value,
        country: this.clientCountry.value,
      },
      clientName: this.clientName.value,
      createdAt: this.invoiceDate.value,
      clientEmail: this.clientEmail.value,
      paymentTerms: this.paymentTerms.value,
      description: this.projectDescription.value,
      items: []
    });
  }

}
