import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

}
