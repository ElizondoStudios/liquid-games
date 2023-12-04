import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ChangeDetectorRef } from '@angular/core';
import juego from 'src/app/interfaces/juego';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  public Juegos: juego[]=[];
  Total=0;
  SubTotal=0;
  IVA=0;

  constructor(public dialog: MatDialog, private cd: ChangeDetectorRef, private router: Router, private api: ApiService, private user: UserService) { }

  openConfirmDialog (): void {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.api.postVentaCarrito({id: (this.user.GetUsuarioID() as number)}).subscribe(
          res =>{
            this.GetJuegos();
          },
          err =>{
            console.log(err)
            this.dialog.open(ErrorComponent);
          }
        )
      } else {
        // El usuario canceló la compra
      }
    });
  }

  ngOnInit(): void {
    this.GetJuegos();
  }

  AbrirJuego(id: number): void{
    this.router.navigateByUrl(`inicio/venta-juego?id=${id}`);
  }

  GetJuegos(){
    this.api.postVerJuegosEnCarrito({id: (this.user.GetUsuarioID() as number)}).subscribe(
      res => {
        this.Juegos= res;
        this.Total= this.Juegos.reduce((a, b) => a + (b.precio || 0), 0);
        this.SubTotal= this.Total/1.16;
        this.IVA= this.Total-this.SubTotal;
      },
      err => {
        console.log(err)
        this.dialog.open(ErrorComponent);
      }
    );
  }

  removeGame (index: number): void {
    this.api.postEliminarCarritoJuego({idUsuario: (this.user.GetUsuarioID() as number), idJuego: (this.Juegos[index].id as number)}).subscribe(
      res => {
        this.GetJuegos();
        this.cd.detectChanges();
      },
      err => {
        console.log(err)
        this.dialog.open(ErrorComponent);
      }
    );
  }
}
