import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-venta-fallida',
  templateUrl: './venta-fallida.component.html',
  styleUrls: ['./venta-fallida.component.css']
})
export class VentaFallidaComponent {
  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  onConfirm (): void {
    this.dialogRef.close(true);
  }

  onDismiss (): void {
    this.dialogRef.close(false);
  }
}
