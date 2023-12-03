import { Component } from '@angular/core';
import usuario from 'src/app/interfaces/usuario';
import juego from 'src/app/interfaces/juego';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/components/error/error.component';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit{
  Usuario: usuario | undefined;
  Juegos: juego[]=[];

  constructor(private router: Router, private api: ApiService, private user: UserService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.GetJuegos();
  }

  AbrirJuego(id: number): void{
    this.router.navigateByUrl(`inicio/venta-juego?id=${id}`);
  }

  GetJuegos(){
    this.api.postVerJuegosEnBiblioteca({id: (this.user.GetUsuarioID() as number)}).subscribe(
      res => {
        this.Juegos= res;
      },
      err => {
        console.log(err)
        this.dialog.open(ErrorComponent);
      }
    );
  }
}
