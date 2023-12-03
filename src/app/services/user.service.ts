import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  idUsuario: number | null = null;

  SetUsuarioID(id: number | null): void{
    localStorage.setItem('idUsuario', id?.toString() ?? '');
    this.idUsuario = id;
  }

  GetUsuarioID(): number | null{
    if(this.idUsuario == null){
      this.idUsuario = parseInt(localStorage.getItem('idUsuario') ?? '') || null;
    }
    return this.idUsuario;
  }
}
