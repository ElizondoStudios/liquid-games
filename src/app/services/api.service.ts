import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getJuegosDestacados(): Observable<any>{
    return this.http.get(`${environment.API_URL}/getJuegosDestacados`)
    //Get de los juegos destacados
    //route: /api/Juegos/getJuegosDestacados
  }
  public getGeneros(): Observable<any>{
    return this.http.get(`${environment.API_URL}/getGeneros`)
    //Get de los generos
    //route: /api/Juegos/getGeneros
  }
  public postBuscarJuegos(params: {slug: string}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postBuscarJuegos`, params)
    //Post para obtener los juegos por la barra de búsqueda
    //route: /api/Juegos/postBuscarJuegos
  }
  public postJuegosCategoria(params: {id: number}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postJuegosCategoria`, params)
    //Post para obtener los juegos al dar click a una categoría
    //route: /api/Juegos/postJuegosCategoria
  }
  public postJuegoPorID(params: {id: number}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postJuegoPorID`, params)
    //Post para obtener los datos de un juego por su id
    //route: /api/Juegos/postJuegoPorID
  }
  public postUsuarioTieneJuego(params: {idUsuario: number, idJuego: number}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postUsuarioTieneJuego`, params)
    //Post para saber si el usuario tiene el juego comprado
    //route: /api/Juegos/postUsuarioTieneJuego
  }
  public postVentaJuego(params: {idUsuario: number, idJuego: number}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postVentaJuego`, params)
    //Post para obtener realizar la venta de un juego
    //route: /api/Ventas/postVentaJuego
  }
  public postCarritoJuego(params: {idUsuario: number, idJuego: number}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postCarritoJuego`, params)
    //Post para agregar un juego al carrito de un usuario
    //route: /api/Carritos/postCarritoJuego
  }
  public postVerJuegosEnCarrito(params: {id: number}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postVerJuegosEnCarrito`, params)
    //Post para ver los juegos en el carrito de un usuario
    //route: /api/Carritos/postVerJuegosEnCarrito
  }
  public postEliminarCarritoJuego(params: {idUsuario: number, idJuego: number}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postEliminarCarritoJuego`, params)
    //Post para eliminar el juego de un carrito
    //route: /api/Carritos/postEliminarCarritoJuego
  }
  public postVerJuegosEnBiblioteca(params: {id: number}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postVerJuegosEnBiblioteca`, params)
    //Post para ver los juegos en la biblioteca de un usuario
    //route: /api/Biblioteca/postVerJuegosEnBiblioteca
  }
  public postTryLogin(params: {username : string, password : string}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postTryLogin`, params)
    //Post para intentar loggear en la aplicacion si no encuntra al usuario es un Unauthorized
    //route: /api/Login/postTryLogin
  }
  public postUsuario(params: {usuario : string, contrasenia : string, correo : string, fechaNacimiento : string}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postUsuario`, params)
    //Post par poder crear un nuevo usuario
    //route: /api/Usuarios/postUsuario
  }
  public postVerificarUsuario(params: {username : string}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postVerificarUsuario`, params)
    //Post para verificar si es que existe otro usuario con ese nombre de usuario. Retorna 
    //route: /api/Usuarios/postVerificarUsuario
  }
  public postVerificarCorreo(params: {correo : string}): Observable<any>{
    return this.http.post(`${environment.API_URL}/postVerificarCorreo`, params)
    //Post para verificar si es que existe otro usuario con ese correo electrónico
    //route: /api/Usuarios/postVerificarCorreo
  }
  public getUsuarioEspecifico(params: {id : string}): Observable<any>{
    return this.http.post(`${environment.API_URL}/getUsuarioEspecifico`, params)
    //Post para obtener toda la información de un usuario específico a través de su id
    //route: /api/Usuarios/getUsuarioEspecifico
  }
  
}
