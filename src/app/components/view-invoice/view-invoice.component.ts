import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StatusColoredTagComponent } from "../status-colored-tag/status-colored-tag.component";
import { InvoicesService } from '../../shared/services/invoices.service';
import { Invoice } from '../../shared/models/invoice.interface';
import { concatMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SidenavService } from '../../shared/services/sidenav.service';

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
    private readonly activatedRoute: ActivatedRoute,
    private readonly sidenavService: SidenavService
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
    this.sidenavService.toggleSidenav();
  }
}
