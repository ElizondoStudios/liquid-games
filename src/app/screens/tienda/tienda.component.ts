import { Component } from '@angular/core';
import juego from '../../interfaces/juego';
import categoria from 'src/app/interfaces/categoria';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { forkJoin, of, pipe, switchMap } from 'rxjs';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  JuegosDestacado: juego[] = [];
  Categorias: categoria[] = [];
  IndiceDestacado: number= 0;

  constructor(private router: Router, private api: ApiService, private dialog: MatDialog) {

   }

  ngOnInit(): void {
    this.GetJuegosDestacado();
  }

  siguienteJuego(): void {
    if(this.IndiceDestacado===this.JuegosDestacado.length-1)
      this.IndiceDestacado=0;
    else
      this.IndiceDestacado++;
    const infoJuego= document.querySelector('.info-juego');
    infoJuego?.classList.add("transicion-juego-siguiente");
    const TO= setTimeout(() => {
      infoJuego?.classList.remove("transicion-juego-siguiente");
      clearTimeout(TO);
    }
    , 600);
  }

  anteriorJuego(): void {
    if(this.IndiceDestacado===0)
      this.IndiceDestacado=this.JuegosDestacado.length-1;
    else
      this.IndiceDestacado--;
      const infoJuego= document.querySelector('.info-juego');
      infoJuego?.classList.add("transicion-juego-anterior");
      const TO= setTimeout(() => {
        infoJuego?.classList.remove("transicion-juego-anterior");
        clearTimeout(TO);
      }
      , 600);
  }

  formatCurrency(cantidad: number): string{
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'MXN' }).format(cantidad);
  }

  AbrirJuego(id: number): void{
    this.router.navigateByUrl(`inicio/venta-juego?id=${id}`);
  }

  // LLamada a la API

  GetJuegosDestacado(): void {
    this.api.getJuegosDestacados().subscribe(
      (res : any) => {
        this.JuegosDestacado= res;
        this.GetCategorias();
      },
      err => {
        console.log(err)
        this.dialog.open(ErrorComponent);
      }
    );
  }

  GetCategorias(): void {
    this.api.getGeneros().subscribe(
      (res : any) => {
        this.Categorias= res;
      },
      err => {
        console.log(err)
        this.dialog.open(ErrorComponent);
      }
    );
  }

  AbrirCategoria(id: number, nombre: string): void{
    this.router.navigateByUrl(`inicio/juegos-categoria?id=${id}&nombre=${nombre}`);
  }
}
