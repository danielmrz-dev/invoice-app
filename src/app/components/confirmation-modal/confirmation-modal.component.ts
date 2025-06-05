import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent
} from '@angular/material/dialog';
import { ThemeService } from '../../shared/services/theme.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, CommonModule],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss',
})
export class ConfirmationModalComponent {
  readonly dialog = inject(MatDialog);
  readonly data = inject(MAT_DIALOG_DATA);

  isDarkThemeActive$: Observable<boolean> = of();

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkThemeActive$ = this.themeService.isDarkThemeActive$;
  }
}
