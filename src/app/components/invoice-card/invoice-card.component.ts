import { Component, Input } from '@angular/core';
import { InvoiceStatus } from '../../shared/models/invoice.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StatusColoredTagComponent } from "../status-colored-tag/status-colored-tag.component";

@Component({
  selector: 'app-invoice-card',
  standalone: true,
  imports: [CommonModule, RouterLink, StatusColoredTagComponent],
  templateUrl: './invoice-card.component.html',
  styleUrl: './invoice-card.component.scss'
})
export class InvoiceCardComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) clientName!: string;
  @Input({ required: true }) date!: string;
  @Input({ required: true }) value!: number;
  @Input({ required: true }) status!: InvoiceStatus;
}
