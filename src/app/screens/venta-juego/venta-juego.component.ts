import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import juego from 'src/app/interfaces/juego';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { UserService } from 'src/app/services/user.service';
import { VentaRealizadaComponent } from 'src/app/components/venta-realizada/venta-realizada.component';
import { VentaFallidaComponent } from 'src/app/components/venta-fallida/venta-fallida.component';

@Component({
  selector: 'app-venta-juego',
  templateUrl: './venta-juego.component.html',
  styleUrls: ['./venta-juego.component.css']
})
export class VentaJuegoComponent implements OnInit{

  JuegoSeleccionado: juego | undefined;
  TieneJuego: boolean= false;
  TieneJuegoCarrito: boolean= false;

  constructor(private route: ActivatedRoute,private user: UserService, private api: ApiService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.GetJuegoPorId(params['id']);
    });
  }

  GetJuegoPorId(id: number){
    this.api.postJuegoPorID({id: id}).subscribe(
      res => {
        this.JuegoSeleccionado= res;
        this.VerificarJuegoEnBiblioteca();
      },
      err => {
        console.log(err)
        this.dialog.open(ErrorComponent);
      }
    );
  }

  VerificarJuegoEnBiblioteca(): void{
    this.api.postUsuarioTieneJuego({idUsuario: (this.user.GetUsuarioID() as number), idJuego: (this.JuegoSeleccionado?.id as number)}).subscribe(
      res => {
        this.TieneJuego= res;
        this.TieneJuegoCarrito= true;
      },
      err => {
        console.log(err)
        this.dialog.open(ErrorComponent);
      }
    );
  }

  AgregarJuegoCarrito(): void{
    this.api.postCarritoJuego({idUsuario: (this.user.GetUsuarioID() as number), idJuego: (this.JuegoSeleccionado?.id as number)}).subscribe(
      res => {
        this.TieneJuegoCarrito= true;
      },
      err => {
        console.log(err)
        this.dialog.open(ErrorComponent);
      }
    );
  }

  VenderJuego(): void{
    this.api.postVentaJuego({idUsuario: (this.user.GetUsuarioID() as number), idJuego: (this.JuegoSeleccionado?.id as number)}).subscribe(
      res => {
        this.TieneJuego= true;
        this.TieneJuegoCarrito= true;
        this.dialog.open(VentaRealizadaComponent);
      },
      err => {
        console.log(err)
        this.dialog.open(VentaFallidaComponent);
      }
    );
  }
}
