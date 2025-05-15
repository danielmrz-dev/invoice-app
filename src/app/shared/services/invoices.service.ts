import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Invoice } from '../models/invoice.interface';
import { invoices } from '../../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private readonly http: HttpClient) { }

  getInvoicesList(): Observable<Invoice[]> {
    return of(invoices)
  }

  getInvoiceById(id: string | null): Observable<Invoice | undefined> {
    return of(invoices.find(invoice => invoice.id === id));   
  }

}
