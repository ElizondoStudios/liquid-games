import { Component } from '@angular/core';
import juego from '../../interfaces/juego';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  JuegosDestacado: juego[] = [];
  IndiceDestacado: number= 0;

  constructor() { }

  ngOnInit(): void {
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
      }
    ]
  }
}
