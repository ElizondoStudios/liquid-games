import { Component } from '@angular/core';
import juego from '../../interfaces/juego';
import categoria from 'src/app/interfaces/categoria';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  JuegosDestacado: juego[] = [];
  Categorias: categoria[] = [];
  IndiceDestacado: number= 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.GetJuegosDestacado();
    this.GetCategorias();
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

  // LLamada a la API

  GetJuegosDestacado(): void {
    this.JuegosDestacado = [
      {
        id: 1,
        nombre: 'Doom (1993)',
        descripcion: 'Mejor shooter de la historia',
        precio: 200,
        descuento: 10,
        calificacion: 10,
        esbr: "T",
        fecha_lanzamiento: "1993-10-01",
        imagen_fondo: "../../assets/images/Doom_fondo.jpg",
        imagen_portada: "../../assets/images/Doom_portada.jfif",
      },
      {
        id: 2,
        nombre: 'Ivancito Georgito',
        descripcion: 'UwU 👉👈',
        precio: 2000000,
        descuento: 10,
        calificacion: 10,
        esbr: "M",
        fecha_lanzamiento: "1993-10-01",
        imagen_fondo: "../../assets/images/ivancito_georgi.jfif",
        imagen_portada: "../../assets/images/ivan.jfif",
      }
    ]
  }

  GetCategorias(): void {
    this.Categorias = [
      {
        id: 1,
        nombre: 'Accion',
      },
      {
        id: 2,
        nombre: 'Aventura',
      },
      {
        id: 3,
        nombre: 'Estrategia',
      },
      {
        id: 4,
        nombre: 'RPG',
      },
      {
        id: 5,
        nombre: 'Deportes',
      },
      {
        id: 6,
        nombre: 'Carreras',
      },
      {
        id: 7,
        nombre: 'Simulacion',
      },
      {
        id: 8,
        nombre: 'Multijugador',
      }
    ].map(categoria => ({...categoria, imagen: `../../assets/images/Doom_portada.jfif`}))
  }

  AbrirCategoria(id: number, nombre: string): void{
    this.router.navigateByUrl(`inicio/juegos-categoria?id=${id}&nombre=${nombre}`);
  }
}
