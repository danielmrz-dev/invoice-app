import { Component, Input } from '@angular/core';
import { InvoiceStatusColorDirective } from '../../shared/directives/invoice-status-color.directive';
import { InvoiceStatus } from '../../shared/models/invoice.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-colored-tag',
  standalone: true,
  imports: [InvoiceStatusColorDirective, CommonModule],
  templateUrl: './status-colored-tag.component.html',
  styleUrl: './status-colored-tag.component.scss'
})
export class StatusColoredTagComponent {
  @Input({ required: true }) status!: InvoiceStatus;
}
