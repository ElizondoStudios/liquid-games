import { Component } from '@angular/core';
import usuario from 'src/app/interfaces/usuario';
import juego from 'src/app/interfaces/juego';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit{
  Usuario: usuario | undefined;
  Juegos: juego[]=[];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.GetJuegos();
  }

  AbrirJuego(id: number): void{
    this.router.navigateByUrl(`inicio/venta-juego?id=${id}`);
  }

  GetJuegos(){
    this.Juegos=[
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
      },
      {
        id: 3,
        nombre: 'Doom (1993) idsjhfpiuadshifhpoadshfodsigfioadsjoifjadsiojfoiadsfosjdhpufjoiadshfjdsuafpodshfuiasoi',
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
        id: 4,
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
}
