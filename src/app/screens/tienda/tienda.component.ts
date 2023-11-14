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
        id: 1,
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
