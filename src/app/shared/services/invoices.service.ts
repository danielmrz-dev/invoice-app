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

  editInvoice(id: string, updatedInvoice: Invoice) {
    const currentInvoices = this.invoicesListSub.getValue();
    const invoiceToReplace = currentInvoices.find(invoice => invoice.id === id);
    if (invoiceToReplace) {
      this.updateInvoice(invoiceToReplace, updatedInvoice);
    }
  }

  private updateInvoice(current: Invoice, updated: Invoice): void {
    current.id = current.id;
    current.clientAddress.street = updated.clientAddress.street ? updated.clientAddress.street : current.clientAddress.street;
    current.clientAddress.city = updated.clientAddress.city || current.clientAddress.city;
    current.clientAddress.country = updated.clientAddress.country || current.clientAddress.country;
    current.clientAddress.postCode = updated.clientAddress.postCode || current.clientAddress.postCode;
    current.clientEmail = updated.clientEmail || current.clientEmail;
    current.clientName = updated.clientName || current.clientName;
    current.createdAt = updated.createdAt || current.createdAt;
    current.description = updated.description || current.description;
    current.items = updated.items || current.items;
    current.paymentDue = updated.paymentDue || current.paymentDue;
    current.paymentTerms = updated.paymentTerms || current.paymentTerms;
    current.status = updated.status || current.status;
    current.total = updated.total || current.total;
  }

}
