import { Invoice } from "../app/shared/models/invoice.interface";

export const invoices: Invoice[] = [
  {
    id: "RT3080",
    createdAt: "2021-08-18",
    paymentDue: "2021-08-19",
    description: "Re-branding",
    paymentTerms: 1,
    clientName: "Jensen Huang",
    clientEmail: "jensenh@mail.com",
    status: "paid",
    senderAddress: {
      senderStreet: "19 Union Terrace",
      senderCity: "London",
      senderPostCode: "E1 3EZ",
      senderCountry: "United Kingdom"
    },
    clientAddress: {
      clientStreet: "106 Kendell Street",
      clientCity: "Sharrington",
      clientPostCode: "NR24 5WQ",
      clientCountry: "United Kingdom"
    },
    items: [
      {
        name: "Brand Guidelines",
        quantity: 1,
        price: 1800.9,
        total: 1800.9
      }
    ],
    total: 1800.9
  },
  {
    id: "XM9141",
    createdAt: "2021-08-21",
    paymentDue: "2021-09-20",
    description: "Graphic Design",
    paymentTerms: 30,
    clientName: "Alex Grim",
    clientEmail: "alexgrim@mail.com",
    status: "pending",
    senderAddress: {
      senderStreet: "19 Union Terrace",
      senderCity: "London",
      senderPostCode: "E1 3EZ",
      senderCountry: "United Kingdom"
    },
    clientAddress: {
      clientStreet: "84 Church Way",
      clientCity: "Bradford",
      clientPostCode: "BD1 9PB",
      clientCountry: "United Kingdom"
    },
    items: [
      {
        name: "Banner Design",
        quantity: 1,
        price: 156.0,
        total: 156.0
      },
      {
        name: "Email Design",
        quantity: 2,
        price: 200.0,
        total: 400.0
      }
    ],
    total: 556.0
  },
  {
    id: "RG0314",
    createdAt: "2021-09-24",
    paymentDue: "2021-10-01",
    description: "Website Redesign",
    paymentTerms: 7,
    clientName: "John Morrison",
    clientEmail: "jm@myco.com",
    status: "paid",
    senderAddress: {
      senderStreet: "19 Union Terrace",
      senderCity: "London",
      senderPostCode: "E1 3EZ",
      senderCountry: "United Kingdom"
    },
    clientAddress: {
      clientStreet: "79 Dover Road",
      clientCity: "Westhall",
      clientPostCode: "IP19 3PF",
      clientCountry: "United Kingdom"
    },
    items: [
      {
        name: "Website Redesign",
        quantity: 1,
        price: 14002.33,
        total: 14002.33
      }
    ],
    total: 14002.33
  },
  {
    id: "RT2080",
    createdAt: "2021-10-11",
    paymentDue: "2021-10-12",
    description: "Logo Concept",
    paymentTerms: 1,
    clientName: "Alysa Werner",
    clientEmail: "alysa@email.co.uk",
    status: "pending",
    senderAddress: {
      senderStreet: "19 Union Terrace",
      senderCity: "London",
      senderPostCode: "E1 3EZ",
      senderCountry: "United Kingdom"
    },
    clientAddress: {
      clientStreet: "63 Warwick Road",
      clientCity: "Carlisle",
      clientPostCode: "CA20 2TG",
      clientCountry: "United Kingdom"
    },
    items: [
      {
        name: "Logo Sketches",
        quantity: 1,
        price: 102.04,
        total: 102.04
      }
    ],
    total: 102.04
  },
  {
    id: "AA1449",
    createdAt: "2021-10-07",
    paymentDue: "2021-10-14",
    description: "Re-branding",
    paymentTerms: 7,
    clientName: "Mellisa Clarke",
    clientEmail: "mellisa.clarke@example.com",
    status: "pending",
    senderAddress: {
      senderStreet: "19 Union Terrace",
      senderCity: "London",
      senderPostCode: "E1 3EZ",
      senderCountry: "United Kingdom"
    },
    clientAddress: {
      clientStreet: "46 Abbey Row",
      clientCity: "Cambridge",
      clientPostCode: "CB5 6EG",
      clientCountry: "United Kingdom"
    },
    items: [
      {
        name: "New Logo",
        quantity: 1,
        price: 1532.33,
        total: 1532.33
      },
      {
        name: "Brand Guidelines",
        quantity: 1,
        price: 2500.0,
        total: 2500.0
      }
    ],
    total: 4032.33
  },
  {
    id: "TY9141",
    createdAt: "2021-10-01",
    paymentDue: "2021-10-31",
    description: "Landing Page Design",
    paymentTerms: 30,
    clientName: "Thomas Wayne",
    clientEmail: "thomas@dc.com",
    status: "pending",
    senderAddress: {
      senderStreet: "19 Union Terrace",
      senderCity: "London",
      senderPostCode: "E1 3EZ",
      senderCountry: "United Kingdom"
    },
    clientAddress: {
      clientStreet: "3964  Queens Lane",
      clientCity: "Gotham",
      clientPostCode: "60457",
      clientCountry: "United States of America"
    },
    items: [
      {
        name: "Web Design",
        quantity: 1,
        price: 6155.91,
        total: 6155.91
      }
    ],
    total: 6155.91
  },
  {
    id: "FV2353",
    createdAt: "2021-11-05",
    paymentDue: "2021-11-12",
    description: "Logo Re-design",
    paymentTerms: 7,
    clientName: "Anita Wainwright",
    clientEmail: "",
    status: "draft",
    senderAddress: {
      senderStreet: "19 Union Terrace",
      senderCity: "London",
      senderPostCode: "E1 3EZ",
      senderCountry: "United Kingdom"
    },
    clientAddress: {
      clientStreet: "",
      clientCity: "",
      clientPostCode: "",
      clientCountry: ""
    },
    items: [
      {
        name: "Logo Re-design",
        quantity: 1,
        price: 3102.04,
        total: 3102.04
      }
    ],
    total: 3102.04
  }
];
