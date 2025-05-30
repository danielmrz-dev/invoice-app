import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './shared/services/sidenav.service';
import { CommonModule, Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { filter, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, MatSidenavModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private readonly sidenavService: SidenavService,
    private readonly router: Router,
    private readonly location: Location,
  ) { }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    fromEvent<KeyboardEvent>(document, 'keyup').pipe(
      filter(event => event.key === 'Escape')
    ).subscribe(() => {
      if (this.router.url.includes('sidenav')) {
        this.location.back();
      }
    });
  }


}
