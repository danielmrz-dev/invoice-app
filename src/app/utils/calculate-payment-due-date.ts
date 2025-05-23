export function calculatePaymentDue(invoiceDate: string | Date, paymentTerms: number): string {
    const date = typeof invoiceDate === 'string' ? new Date(`${invoiceDate}T00:00:00`) : new Date(invoiceDate);
    const daysToAdd = typeof paymentTerms === 'string' ? parseInt(paymentTerms, 10) : paymentTerms;
    date.setDate(date.getDate() + daysToAdd);
    console.log("Data de criação => ", invoiceDate);    
    console.log("Dias para pagar => ", daysToAdd);    
    console.log("Data esperada => ", date.toISOString().split('T')[0]);    
    return date.toISOString().split('T')[0];
}