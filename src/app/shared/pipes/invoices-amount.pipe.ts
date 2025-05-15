import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invoicesAmount',
  standalone: true
})
export class InvoicesAmountPipe implements PipeTransform {

  transform(invoicesAmount: number): string {
    
    if (invoicesAmount <= 0) {
      return "No invoices";
    }

    if (invoicesAmount === 1) {
      return `1 invoice`;
    }

    return `${invoicesAmount} invoices`;
    
  }

}
