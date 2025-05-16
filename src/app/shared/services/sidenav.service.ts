import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav!: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public toggleSidenav(): void {
    this.sidenav.toggle();
  }

  public open(): void {
    this.sidenav.open();
  }

  public close(): void {
    this.sidenav.close();
  }
}
