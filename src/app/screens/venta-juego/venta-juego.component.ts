import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import juego from 'src/app/interfaces/juego';
@Component({
  selector: 'app-venta-juego',
  templateUrl: './venta-juego.component.html',
  styleUrls: ['./venta-juego.component.css']
})
export class VentaJuegoComponent implements OnInit{

  JuegoSeleccionado: juego | undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.GetJuegoPorId(params['id']);
    });
  }

  GetJuegoPorId(id: number){
    this.JuegoSeleccionado=
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
  }

  AgregarJuegoCarrito(): void{
    alert("Juego agregado al carrito");
  }

  VenderJuego(): void{
    alert("Juego comprado");
  }
}
