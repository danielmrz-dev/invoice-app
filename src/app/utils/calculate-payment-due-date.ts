export function calculatePaymentDue(invoiceDate: string | Date, paymentTerms: number): string {
    const date = typeof invoiceDate === 'string' ? new Date(`${invoiceDate}T00:00:00`) : new Date(invoiceDate);
    const daysToAdd = typeof paymentTerms === 'string' ? parseInt(paymentTerms, 10) : paymentTerms;
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split('T')[0];
}