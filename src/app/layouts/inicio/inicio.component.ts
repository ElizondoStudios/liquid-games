import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  Titulo: string= "";
  Busqueda: string="";

  constructor(private router: Router) {}

  ngOnInit() {
  }

  BuscarJuego(): void{
    const slug= this.Busqueda.toLocaleLowerCase().replaceAll(" ", "-");
    this.router.navigateByUrl(`inicio/juegos-busqueda?slug=${slug}&busqueda=${this.Busqueda}`);
  }
}
