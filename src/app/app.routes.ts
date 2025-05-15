import { Routes } from '@angular/router';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/invoices', pathMatch: 'full' },
    { 
        path: 'invoices', 
        component: InvoicesListComponent,
        title: 'Invoices'
    },
    { 
        path: 'view-invoice/:id', 
        loadComponent: () => import('../app/components/view-invoice/view-invoice.component').then(c => c.ViewInvoiceComponent),
        title: 'View invoice'
    },
];
