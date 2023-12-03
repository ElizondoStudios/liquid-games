import { Component } from '@angular/core';
import { data } from './data';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ChangeDetectorRef } from '@angular/core';
import juego from 'src/app/interfaces/juego';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  public games: any[] = data.results

  constructor(public dialog: MatDialog, private cd: ChangeDetectorRef, private router: Router) { }

  openConfirmDialog (): void {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // El usuario confirmó la compra
        // Aquí puedes colocar la lógica para manejar la confirmación de la compra
      } else {
        // El usuario canceló la compra
      }
    });
  }

  AbrirJuego(id: number): void{
    this.router.navigateByUrl(`inicio/venta-juego?id=${id}`);
  }

  removeGame (index: number): void {
    this.games.splice(index, 1)

    this.cd.detectChanges()
  }
}
