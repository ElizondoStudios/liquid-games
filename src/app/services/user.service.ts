import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  idUsuario: number | null = null;

  SetUsuarioID(id: number | null): void{
    this.idUsuario = id;
  }

  GetUsuarioID(): number | null{
    return this.idUsuario;
  }
}
