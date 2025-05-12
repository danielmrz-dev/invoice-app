export interface Invoice {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: string;
    senderAddress: ISenderAddress;
    clientAddress: IClientAddress;
    items: Item[];
    total: number;
}

export interface ISenderAddress {
    street: string;
    city: string;
    postCode: string;
    country: string;
}

export interface IClientAddress {
    street: string;
    city: string;
    postCode: string;
    country: string;
}

export interface Item {
    name: string;
    quantity: number;
    price: number;
    total: number;
}
