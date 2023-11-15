import { Routes } from '@angular/router';
import { TiendaComponent } from 'src/app/screens/tienda/tienda.component';
import { BibliotecaComponent } from 'src/app/screens/biblioteca/biblioteca.component';
import { CarritoComponent } from 'src/app/screens/carrito/carrito.component';
import { JuegosCategoriaComponent } from 'src/app/screens/juegos-categoria/juegos-categoria.component';

export const InicioRoutes: Routes = [
    { path: 'tienda', component: TiendaComponent, data: { title: 'Tienda' } },
    { path: 'biblioteca', component: BibliotecaComponent, data: { title: 'Biblioteca' } },
    { path: 'carrito', component: CarritoComponent, data: { title: 'Carrito' } },
    { path: 'juegos-categoria', component: JuegosCategoriaComponent, data: { title: 'Juegos por categoria' } },
    { path: '', redirectTo: 'tienda', pathMatch: 'full' }
];