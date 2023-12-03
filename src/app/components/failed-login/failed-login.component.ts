import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-failed-login',
  templateUrl: './failed-login.component.html',
  styleUrls: ['./failed-login.component.css']
})
export class FailedLoginComponent {
  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  onConfirm (): void {
    this.dialogRef.close(true);
  }

  onDismiss (): void {
    this.dialogRef.close(false);
  }
}
