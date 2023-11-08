import { Routes } from '@angular/router';
import { TiendaComponent } from 'src/app/screens/tienda/tienda.component';
import { BibliotecaComponent } from 'src/app/screens/biblioteca/biblioteca.component';

export const InicioRoutes: Routes = [
    { path: 'tienda', component: TiendaComponent, data: { title: 'Tienda' } },
    { path: 'biblioteca', component: BibliotecaComponent, data: { title: 'Biblioteca' } },
    { path: '', redirectTo: 'tienda', pathMatch: 'full' }
];