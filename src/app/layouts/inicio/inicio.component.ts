import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  Titulo: string= "";
  Busqueda: string="";

  constructor(private titleService : Title) {}

  ngOnInit() {
  }

  BuscarJuego(): void{
    console.log(this.Busqueda)
  }
}
