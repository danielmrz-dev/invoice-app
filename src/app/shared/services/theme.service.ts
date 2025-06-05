import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkThemeActiveSub = new BehaviorSubject<boolean>(true);
  isDarkThemeActive$ = this.isDarkThemeActiveSub.asObservable();

  toggleTheme() {
    this.isDarkThemeActiveSub.next(!this.isDarkThemeActiveSub.getValue());
  }
}
