export function calculatePaymentDue(invoiceDate: string, paymentTerms: number): string {
    const createdDate = new Date(invoiceDate);
    createdDate.setDate(createdDate.getDate() + paymentTerms);
    return createdDate.toISOString().split('T')[0];
}