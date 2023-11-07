import { Routes } from '@angular/router';
import { TiendaComponent } from 'src/app/screens/tienda/tienda.component';

export const InicioRoutes: Routes = [
    //Menu modules
    { path: 'tienda', component: TiendaComponent, data: { title: 'Tienda' } },
];