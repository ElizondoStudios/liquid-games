# Liquid Games
## Descripción
Liquid Games es un proyecto de tienda virtual de video juegos, inspirada en Steam de Valve.
Liquid es un proyecto personal/académico, con el propósito de ser una demostración técnica de un proyecto *full stack*.

## Tecnologías
```
angular: 16.0.0
ng-bootstrap: 15.1.2
angular/material: 16.2.11
```

## Interfaces
```ts
interface categoria{

    id: number;

    nombre: string;

    imagen: string;

}

interface juego{

    id: number;

    nombre: string;

    descripcion: string;

    precio: number;

    descuento: number;

    esbr: string;

    calificacion: number; //Calificación de metacritic

    imagen_portada: string;

    imagen_fondo: string;

    fecha_lanzamiento: string;

}

interface usuario{

    id: number,

    usuario : string,

    contrasenia : string,

    fechaNacimiento : Date,

    correo : string

}
```
## Endpoints
```ts
getJuegosDestacados(): juego[]{
	//Get de los juegos destacados
}
getGeneros(): genero[]{
	//Get de los generos
}
postBuscarJuegos(params: {slug: string}): juego[]{
	//Post para obtener los juegos por la barra de búsqueda
}
postJuegosCategoria(params: {id: number}): juego[]{
	//Post para obtener los juegos al dar click a una categoría
}
postJuegoPorID(params: {id: number}): juego[]{
	//Post para obtener los datos de un juego por su id
}
postUsuarioTieneJuego(params: {idUsuario: number, idJuego: number}): boolean{
	//Post para saber si el usuario tiene el juego comprado
}
postVentaJuego(params: {idUsuario: number, idJuego: number}): void{
	//Post para obtener realizar la venta de un juego
}
postCarritoJuego(params: {idUsuario: number, idJuego: number}): void{
	//Post para agregar un juego al carrito de un usuario
}
postVerJuegosEnCarrito(params: {id: number}): juego[]{
  //Post para ver los juegos en el carrito de un usuario
}
postEliminarCarritoJuego(params: {idUsuario: number, idJuego: number}): void{
	//Post para eliminar el juego de un carrito
}
postVerJuegosEnBiblioteca(params: {id: number}): juego[]{
  //Post para ver los juegos en la biblioteca de un usuario
}
```

## Colaboradores
[ElizondoStudios](https://github.com/ElizondoStudios)
[MauriRiver](https://github.com/MauriRiver345)
[Ikaros](https://github.com/IkarosKurtz)
[Ivan Hurtado](https://github.com/IvanHurtado92)
