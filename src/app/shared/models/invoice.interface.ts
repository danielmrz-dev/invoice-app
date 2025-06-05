export interface Invoice {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: InvoiceStatus;
    senderAddress: ISenderAddress;
    clientAddress: IClientAddress;
    items: Item[];
    total: number;
}

export interface ISenderAddress {
    senderStreet: string;
    senderCity: string;
    senderPostCode: string;
    senderCountry: string;
}

export interface IClientAddress {
    clientStreet: string;
    clientCity: string;
    clientPostCode: string;
    clientCountry: string;
}

export interface Item {
    name: string;
    quantity: number;
    price: number;
    total: number;
}

export type InvoiceStatus = "pending" | "paid" | "draft";
