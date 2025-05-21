import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Invoice } from '../models/invoice.interface';
import { invoices } from '../../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  invoicesListSub = new BehaviorSubject<Invoice[]>(invoices);
  invoices$ = this.invoicesListSub.asObservable();

  constructor(private readonly http: HttpClient) { }

  getInvoiceById(id: string | null): Observable<Invoice | undefined> {
    return this.invoices$.pipe(
      map((invoices) => {
        const invoiceFound = invoices.find(invoice => invoice.id === id);
        return invoiceFound;
      })
    )
  }

  editInvoice(id: string, updatedInvoice: Partial<Invoice>) {
    const currentInvoices = this.invoicesListSub.getValue();
    const updatedInvoices = currentInvoices.map(invoice =>
      invoice.id === id ? updatedInvoice as Invoice : invoice
    );
    this.invoicesListSub.next(updatedInvoices);
  }

}
