import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { InvoicesService } from '../../shared/services/invoices.service';
import { Observable, of, Subscription } from 'rxjs';
import { Invoice, InvoiceStatus } from '../../shared/models/invoice.interface';
import { CommonModule } from '@angular/common';
import { InvoicesAmountPipe } from '../../shared/pipes/invoices-amount.pipe';
import { InvoiceCardComponent } from "../invoice-card/invoice-card.component";
import { SidenavService } from '../../shared/services/sidenav.service';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemeService } from '../../shared/services/theme.service';



@Component({
  selector: 'app-invoices-list',
  standalone: true,
  imports: [InvoiceCardComponent, CommonModule, InvoicesAmountPipe, InvoiceCardComponent, MatMenuModule, MatCheckboxModule],
  templateUrl: './invoices-list.component.html',
  styleUrl: './invoices-list.component.scss'
})
export class InvoicesListComponent implements OnInit, OnDestroy {

  invoices: Invoice[] = [];
  filteredInvoices: Invoice[] = [];
  invoicesAmount: number = 0;
  invoicesAmountSub!: Subscription;
  invoicesFilter: InvoiceStatus[] = [];
  isDarkThemeActive$: Observable<boolean> = of();

  constructor(
    private readonly invoicesService: InvoicesService,
    private readonly sidenavService: SidenavService,
    private readonly router: Router,
    private readonly themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.invoicesService.invoices$.subscribe((invoices) => {
      this.invoices = invoices;
      this.filteredInvoices = invoices;
    });
    this.invoicesAmountSub = this.invoicesService.invoices$.subscribe((invoicesList) => {
      this.invoicesAmount = invoicesList.length;
    })
    this.isDarkThemeActive$ = this.themeService.isDarkThemeActive$;
  }

  ngOnDestroy(): void {
    this.invoicesAmountSub.unsubscribe();
  }

  openSidenav() {
    this.router.navigate([
      { outlets: { sidenav: ['new-invoice'] } }
    ]);
    this.sidenavService.openSidenav();
  }

  filterByStatus(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const filterAlreadyExists = this.invoicesFilter.some(status => status === checkbox.id);
    if (checkbox.checked && !filterAlreadyExists) {
      this.invoicesFilter.push(checkbox.id as InvoiceStatus);
    }

    if (!checkbox.checked && filterAlreadyExists) {
      this.invoicesFilter = this.invoicesFilter.filter(status => status !== checkbox.id);
    }

    if (this.invoicesFilter.length === 0) {
      this.filteredInvoices = this.invoices;
    } else {
      this.filteredInvoices = this.invoices.filter((invoice) => {
        return this.invoicesFilter.includes(invoice.status)
      })
    }
  }
}
