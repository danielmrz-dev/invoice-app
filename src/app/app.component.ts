import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './shared/services/sidenav.service';
import { CommonModule } from '@angular/common';
import { InvoiceFormComponent } from "./components/invoice-form/invoice-form.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, MatSidenavModule, CommonModule, InvoiceFormComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private readonly sidenavService: SidenavService) {}

  ngAfterViewInit(): void {
      this.sidenavService.setSidenav(this.sidenav);
  }
}
