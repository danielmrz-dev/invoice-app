import { Directive, HostBinding, Input } from '@angular/core';
import { InvoiceStatus } from '../models/invoice.interface';

@Directive({
  selector: '[statusColorDirective]',
  standalone: true
})
export class InvoiceStatusColorDirective {

  @Input({ required: true }) currentStatus!: InvoiceStatus;

  @HostBinding("class") get colors() {
    return {
      'paid': this.currentStatus === 'paid',
      'pending': this.currentStatus === 'pending',
      'draft': this.currentStatus === 'draft',
    }
  }

}
