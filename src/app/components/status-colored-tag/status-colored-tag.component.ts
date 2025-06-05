import { Component, Input } from '@angular/core';
import { InvoiceStatusColorDirective } from '../../shared/directives/invoice-status-color.directive';
import { InvoiceStatus } from '../../shared/models/invoice.interface';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../shared/services/theme.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-status-colored-tag',
  standalone: true,
  imports: [InvoiceStatusColorDirective, CommonModule],
  templateUrl: './status-colored-tag.component.html',
  styleUrl: './status-colored-tag.component.scss'
})
export class StatusColoredTagComponent {

  isDarkThemeActive$: Observable<boolean> = of();
  @Input({ required: true }) status!: InvoiceStatus;

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkThemeActive$ = this.themeService.isDarkThemeActive$;
  }
}
