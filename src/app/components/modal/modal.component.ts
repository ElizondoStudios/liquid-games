import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  onConfirm (): void {
    this.dialogRef.close(true);
  }

  onDismiss (): void {
    this.dialogRef.close(false);
  }
}
