import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent
} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {
  readonly dialog = inject(MatDialog);
  readonly data = inject(MAT_DIALOG_DATA);
}
