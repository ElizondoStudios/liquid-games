import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  Titulo: string= "";
  Busqueda: string="";

  constructor(private router: Router, private user: UserService) {}

  ngOnInit() {
  }

  BuscarJuego(): void{
    const slug= this.Busqueda.toLocaleLowerCase().replaceAll(" ", "-");
    this.router.navigateByUrl(`inicio/juegos-busqueda?slug=${slug}&busqueda=${this.Busqueda}`);
  }

  CerrarSesion(): void{
    this.user.SetUsuarioID(null);
    this.router.navigateByUrl(`login`);
  }
}
