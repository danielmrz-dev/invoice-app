import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isDarkThemeActive$: Observable<boolean> = of();

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkThemeActive$ = this.themeService.isDarkThemeActive$
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
