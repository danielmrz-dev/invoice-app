import { Component, OnDestroy, OnInit } from '@angular/core';
import { InvoicesService } from '../../shared/services/invoices.service';
import { Observable, of, Subscription } from 'rxjs';
import { Invoice } from '../../shared/models/invoice.interface';
import { CommonModule } from '@angular/common';
import { InvoicesAmountPipe } from '../../shared/pipes/invoices-amount.pipe';
import { InvoiceCardComponent } from "../invoice-card/invoice-card.component";
import { RouterLink } from '@angular/router';
import { SidenavService } from '../../shared/services/sidenav.service';

@Component({
  selector: 'app-invoices-list',
  standalone: true,
  imports: [InvoiceCardComponent, CommonModule, InvoicesAmountPipe, InvoiceCardComponent, RouterLink],
  templateUrl: './invoices-list.component.html',
  styleUrl: './invoices-list.component.scss'
})
export class InvoicesListComponent implements OnInit, OnDestroy {

  invoices$: Observable<Invoice[]> = of([]);
  invoicesAmount: number = 0;
  invoicesAmountSub!: Subscription;

  constructor(
    private readonly invoicesService: InvoicesService,
    private readonly sidenavService: SidenavService
  ) {}

  ngOnInit(): void {
    this.invoices$ = this.invoicesService.getInvoicesList();
    this.invoicesAmountSub = this.invoicesService.getInvoicesList().subscribe((invoicesList) => {
      this.invoicesAmount = invoicesList.length;
    })
  }

  ngOnDestroy(): void {
    this.invoicesAmountSub.unsubscribe();
  }
  
  openSidenav() {
    this.sidenavService.toggleSidenav();
  }
}
