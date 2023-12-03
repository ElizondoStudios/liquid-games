import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import juego from 'src/app/interfaces/juego';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/components/error/error.component';

@Component({
  selector: 'app-juegos-busqueda',
  templateUrl: './juegos-busqueda.component.html',
  styleUrls: ['./juegos-busqueda.component.css']
})
export class JuegosBusquedaComponent implements OnInit {
  Slug: string= "";
  Busqueda: string= "";
  JuegosBusqueda: juego[]=[];

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private dialog: MatDialog) { }

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
    this.api.postBuscarJuegos({slug: this.Slug}).subscribe(
      res => {
        this.JuegosBusqueda= res;
      },
      err => {
        console.log(err)
        this.dialog.open(ErrorComponent);
      }
    );
  }
}
