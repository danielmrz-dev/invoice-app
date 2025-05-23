import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StatusColoredTagComponent } from "../status-colored-tag/status-colored-tag.component";
import { InvoicesService } from '../../shared/services/invoices.service';
import { Invoice } from '../../shared/models/invoice.interface';
import { BehaviorSubject, concatMap, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SidenavService } from '../../shared/services/sidenav.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

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

  constructor(
    private readonly invoicesService: InvoicesService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly sidenavService: SidenavService,
    private readonly dialog: MatDialog,
  ) {}

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
  }

  openEditForm() {
    this.router.navigate([
      { outlets: { sidenav: ['edit-invoice', this.invoice?.id] } }
    ]);
    this.sidenavService.toggleSidenav();
  }

  deleteInvoice() {
    this.dialog.open(ConfirmationModalComponent, {
      data: {
        invoiceId: this.invoice?.id
      }
    }).afterClosed().subscribe((result) => {
      if (result === 'delete' && this.invoice?.id) {
        this.invoicesService.deleteInvoice(this.invoice.id);        
        this.router.navigate(['/invoices']);
      }
    })
  }
}
