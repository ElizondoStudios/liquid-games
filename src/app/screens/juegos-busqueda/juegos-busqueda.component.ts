import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import juego from 'src/app/interfaces/juego';

@Component({
  selector: 'app-juegos-busqueda',
  templateUrl: './juegos-busqueda.component.html',
  styleUrls: ['./juegos-busqueda.component.css']
})
export class JuegosBusquedaComponent implements OnInit {
  Slug: string= "";
  Busqueda: string= "";
  JuegosBusqueda: juego[]=[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.Slug = params['slug'];
      this.Busqueda = params['busqueda'];
      this.GetJuegosBusqueda();
    });
  }

  AbrirJuego(id: number): void{
    this.router.navigateByUrl(`inicio/venta-juego?id=${id}`);
  }

  GetJuegosBusqueda(): void {
    this.JuegosBusqueda = [
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
