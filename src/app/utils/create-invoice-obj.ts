import { Invoice } from "../shared/models/invoice.interface";

export function createInvoiceObj(invoice: Invoice): Invoice {
    const invoiceObj: Invoice = {
        id: invoice?.id,
        createdAt: invoice?.createdAt,
        paymentDue: invoice?.paymentDue,
        description: invoice?.description,
        paymentTerms: invoice?.paymentTerms,
        clientName: invoice?.clientName,
        clientEmail: invoice?.clientEmail,
        status: invoice?.status,
        senderAddress: {
            street: invoice?.senderAddress.street,
            city: invoice?.senderAddress.city,
            postCode: invoice?.senderAddress.postCode,
            country: invoice?.senderAddress.country
        },
        clientAddress: {
            street: invoice?.clientAddress.street,
            city: invoice?.clientAddress.city,
            postCode: invoice?.clientAddress.postCode,
            country: invoice?.clientAddress.country
        },
        items: invoice?.items.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.total
        })),
        total: invoice?.total
    };

    return invoiceObj;
}
