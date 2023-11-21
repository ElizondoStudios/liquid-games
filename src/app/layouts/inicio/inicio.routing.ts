import { Routes } from '@angular/router';
import { TiendaComponent } from 'src/app/screens/tienda/tienda.component';
import { BibliotecaComponent } from 'src/app/screens/biblioteca/biblioteca.component';
import { CarritoComponent } from 'src/app/screens/carrito/carrito.component';
import { JuegosCategoriaComponent } from 'src/app/screens/juegos-categoria/juegos-categoria.component';
import { JuegosBusquedaComponent } from 'src/app/screens/juegos-busqueda/juegos-busqueda.component';
import { VentaJuegoComponent } from 'src/app/screens/venta-juego/venta-juego.component';

export const InicioRoutes: Routes = [
    { path: 'tienda', component: TiendaComponent, data: { title: 'Tienda' } },
    { path: 'biblioteca', component: BibliotecaComponent, data: { title: 'Biblioteca' } },
    { path: 'carrito', component: CarritoComponent, data: { title: 'Carrito' } },
    { path: 'juegos-categoria', component: JuegosCategoriaComponent, data: { title: 'Juegos por categoria' } },
    { path: 'juegos-busqueda', component: JuegosBusquedaComponent, data: { title: 'Juegos por busqueda' } },
    { path: 'venta-juego', component: VentaJuegoComponent, data: { title: 'Venta de juego' } },

    { path: '', redirectTo: 'tienda', pathMatch: 'full' }
];