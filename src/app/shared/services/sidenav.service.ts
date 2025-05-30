import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav!: MatSidenav;

  setSidenav(sidenav: MatSidenav): void {
    this.sidenav = sidenav;
  }

  openSidenav(): void {
    this.sidenav.open();
  }
  
  closeSidenav() {
    this.sidenav.close();
  }
}
