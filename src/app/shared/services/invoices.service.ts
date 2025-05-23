import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Invoice, InvoiceStatus, Item } from '../models/invoice.interface';
import { invoices } from '../../../assets/data';
import { generateInvoiceId } from '../../utils/generate-invoice-id';
import { calculatePaymentDue } from '../../utils/calculate-payment-due-date';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  invoicesListSub = new BehaviorSubject<Invoice[]>(invoices);
  invoices$ = this.invoicesListSub.asObservable();

  getInvoiceById(id: string | null): Observable<Invoice | undefined> {
    return this.invoices$.pipe(
      map((invoices) => {
        const invoiceFound = invoices.find(invoice => invoice.id === id);
        return invoiceFound;
      })
    )
  }

  createNewInvoice(invoiceInfo: Invoice, status: InvoiceStatus) {
    invoiceInfo.id = this.generateInvoiceId();
    invoiceInfo.status = status;
    invoiceInfo.paymentDue = calculatePaymentDue(invoiceInfo.createdAt, invoiceInfo.paymentTerms);
    invoiceInfo.total = invoiceInfo.items.reduce((acc, current) => acc + (current.price * current.quantity), 0);
    this.invoicesListSub.next([...this.invoicesListSub.getValue(), invoiceInfo]);
  }

  editInvoice(id: string, updatedInvoice: Invoice) {
    const currentInvoices = this.invoicesListSub.getValue();
    const invoiceToReplace = currentInvoices.find(invoice => invoice.id === id);
    if (invoiceToReplace) {
      this.updateInvoice(invoiceToReplace, updatedInvoice);
    }
  }

  deleteInvoice(id: string) {
    const invoiceFound = this.invoicesListSub.getValue().find(invoice => invoice.id === id);
    this.invoicesListSub.next(this.invoicesListSub.getValue().filter(item => item.id !== invoiceFound?.id));
  }

  private updateInvoice(current: Invoice, updated: Invoice): void {
    current.id = current.id;
    current.clientAddress.street = updated.clientAddress.street || current.clientAddress.street;
    current.clientAddress.city = updated.clientAddress.city || current.clientAddress.city;
    current.clientAddress.country = updated.clientAddress.country || current.clientAddress.country;
    current.clientAddress.postCode = updated.clientAddress.postCode || current.clientAddress.postCode;
    current.senderAddress.street = updated.senderAddress.street || updated.senderAddress.street
    current.senderAddress.city = updated.senderAddress.city || updated.senderAddress.city
    current.senderAddress.postCode = updated.senderAddress.postCode || updated.senderAddress.postCode
    current.senderAddress.country = updated.senderAddress.country || updated.senderAddress.country
    current.clientEmail = updated.clientEmail || current.clientEmail;
    current.clientName = updated.clientName || current.clientName;
    current.createdAt = updated.createdAt || current.createdAt;
    current.description = updated.description || current.description;
    current.items = updated.items || current.items;
    current.paymentTerms = updated.paymentTerms || current.paymentTerms;
    current.paymentDue = calculatePaymentDue(updated.createdAt, updated.paymentTerms) || current.paymentDue;
    current.status = updated.status || current.status;
    current.total = this.getTotalInvoiceAmountDue(updated.items) || current.total;
  }

  private getTotalInvoiceAmountDue(items: Item[]): number {
    return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  private generateInvoiceId(): string {
    let newId: string;
    const existingIds = new Set(this.invoicesListSub.getValue().map(inv => inv.id));
    do {
      newId = generateInvoiceId();
    } while (existingIds.has(newId));
    return newId;
  }



}
