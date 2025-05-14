import { Component, Input } from '@angular/core';
import { InvoiceStatus } from '../../models/invoice.interface';
import { CommonModule } from '@angular/common';
import { InvoiceStatusColorDirective } from '../../directives/invoice-status-color.directive';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, InvoiceStatusColorDirective],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {

  @Input({ required: true }) id!: string;
  @Input({ required: true }) clientName!: string;
  @Input({ required: true }) date!: string;
  @Input({ required: true }) value!: number;
  @Input({ required: true }) status!: InvoiceStatus;
}
