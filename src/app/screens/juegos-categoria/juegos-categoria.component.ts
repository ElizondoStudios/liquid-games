import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import juego from 'src/app/interfaces/juego';
import categoria from 'src/app/interfaces/categoria';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/components/error/error.component';

@Component({
  selector: 'app-juegos-categoria',
  templateUrl: './juegos-categoria.component.html',
  styleUrls: ['./juegos-categoria.component.css']
})
export class JuegosCategoriaComponent implements OnInit{
  JuegosCategoria: juego[]=[];
  IdCategoria: number= 0;
  NombreCategoria: string= "";

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.IdCategoria = params['id'];
      this.NombreCategoria = params['nombre'];
      this.GetJuegosCategoria();
    });
  }

  AbrirJuego(id: number): void{
    this.router.navigateByUrl(`inicio/venta-juego?id=${id}`);
  }

  GetJuegosCategoria(): void {
    this.api.postJuegosCategoria({id: this.IdCategoria}).subscribe(
      res => {
        this.JuegosCategoria= res;
      },
      err => {
        console.log(err)
        this.dialog.open(ErrorComponent);
      }
    );
  }
}
