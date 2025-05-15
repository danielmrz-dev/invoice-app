import { InvoicesAmountPipe } from './invoices-amount.pipe';

describe('InvoicesAmountPipe', () => {
  it('create an instance', () => {
    const pipe = new InvoicesAmountPipe();
    expect(pipe).toBeTruthy();
  });
});
