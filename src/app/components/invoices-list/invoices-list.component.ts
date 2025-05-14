import { Component, OnInit } from '@angular/core';
import { InvoiceComponent } from "../invoice/invoice.component";
import { InvoicesService } from '../../services/invoices.service';
import { Observable, of } from 'rxjs';
import { Invoice } from '../../models/invoice.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoices-list',
  standalone: true,
  imports: [InvoiceComponent, CommonModule],
  templateUrl: './invoices-list.component.html',
  styleUrl: './invoices-list.component.scss'
})
export class InvoicesListComponent implements OnInit {

  invoices$: Observable<Invoice[]> = of([]);

  constructor(private readonly invoicesService: InvoicesService) {}

  ngOnInit(): void {
      this.invoices$ = this.invoicesService.getInvoicesList();
  }

}
