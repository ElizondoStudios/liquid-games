import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-venta-realizada',
  templateUrl: './venta-realizada.component.html',
  styleUrls: ['./venta-realizada.component.css']
})
export class VentaRealizadaComponent {
  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  onConfirm (): void {
    this.dialogRef.close(true);
  }

  onDismiss (): void {
    this.dialogRef.close(false);
  }
}
