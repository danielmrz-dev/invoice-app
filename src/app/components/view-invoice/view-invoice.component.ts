import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StatusColoredTagComponent } from "../status-colored-tag/status-colored-tag.component";
import { InvoicesService } from '../../shared/services/invoices.service';
import { Invoice } from '../../shared/models/invoice.interface';
import { concatMap, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SidenavService } from '../../shared/services/sidenav.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-view-invoice',
  standalone: true,
  imports: [RouterLink, StatusColoredTagComponent, CommonModule],
  templateUrl: './view-invoice.component.html',
  styleUrl: './view-invoice.component.scss'
})
export class ViewInvoiceComponent implements OnInit {

  invoice!: Invoice | undefined;
  idNotFound: string | null = '';
  isDarkThemeActive$: Observable<boolean> = of();

  constructor(
    private readonly invoicesService: InvoicesService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly sidenavService: SidenavService,
    private readonly dialog: MatDialog,
    private readonly themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      concatMap(
        (params) => {
          if (params.get('id')) {
            this.idNotFound = params.get('id');
          }
          return this.invoicesService.getInvoiceById(params.get('id'))
        }
      )
    ).subscribe((invoiceFound) => {
      if (invoiceFound) {
        this.invoice = invoiceFound;
      }
    })
    this.isDarkThemeActive$ = this.themeService.isDarkThemeActive$;
  }

  openEditForm() {
    this.router.navigate([
      { outlets: { sidenav: ['edit-invoice', this.invoice?.id] } }
    ]);
    this.sidenavService.openSidenav();
  }

  deleteInvoice() {
    this.dialog.open(ConfirmationModalComponent, {
      data: {
        confirmDelete: true,
        markAsPaid: false,
        invoiceId: this.invoice?.id
      }
    }).afterClosed().subscribe((result) => {
      if (result === 'delete') {
        this.invoicesService.deleteInvoice(this.invoice!.id);
        this.router.navigate(['/invoices']);
      }
    })
  }

  markInvoiceAsPaid() {
    if (this.invoice) {
      this.dialog.open(ConfirmationModalComponent, {
        data: {
          confirmDelete: false,
          markAsPaid: true,
          invoiceId: this.invoice?.id
        }
      }).afterClosed().subscribe((result) => {
        if (result === 'confirm' && this.invoice?.id) {
          this.invoicesService.markInvoiceAsPaid(this.invoice);
        }
      })
    }
  }
}
