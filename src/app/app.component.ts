import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { InvoicesListComponent } from "./components/invoices-list/invoices-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InvoicesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
