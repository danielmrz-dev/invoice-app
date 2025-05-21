import { Component, OnDestroy, OnInit } from '@angular/core';
import { InvoicesService } from '../../shared/services/invoices.service';
import { Observable, of, Subscription } from 'rxjs';
import { Invoice } from '../../shared/models/invoice.interface';
import { CommonModule } from '@angular/common';
import { InvoicesAmountPipe } from '../../shared/pipes/invoices-amount.pipe';
import { InvoiceCardComponent } from "../invoice-card/invoice-card.component";
import { SidenavService } from '../../shared/services/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices-list',
  standalone: true,
  imports: [InvoiceCardComponent, CommonModule, InvoicesAmountPipe, InvoiceCardComponent],
  templateUrl: './invoices-list.component.html',
  styleUrl: './invoices-list.component.scss'
})
export class InvoicesListComponent implements OnInit, OnDestroy {

  invoices$: Observable<Invoice[]> = of([]);
  invoicesAmount: number = 0;
  invoicesAmountSub!: Subscription;

  constructor(
    private readonly invoicesService: InvoicesService,
    private readonly sidenavService: SidenavService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.invoices$ = this.invoicesService.invoices$;
    this.invoicesAmountSub = this.invoicesService.invoices$.subscribe((invoicesList) => {
      this.invoicesAmount = invoicesList.length;
    })
  }

  ngOnDestroy(): void {
    this.invoicesAmountSub.unsubscribe();
  }
  
  openSidenav() {
    this.router.navigate([
      { outlets: { sidenav: ['new-invoice'] } }
    ]);
    this.sidenavService.toggleSidenav();
  }
}
