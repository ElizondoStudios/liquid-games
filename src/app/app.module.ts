import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './layouts/inicio/inicio.component';
import { TiendaComponent } from './screens/tienda/tienda.component';
import { LoginComponent } from './screens/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BibliotecaComponent } from './screens/biblioteca/biblioteca.component';
<<<<<<< HEAD
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
=======
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CarritoComponent } from './screens/carrito/carrito.component';
>>>>>>> origin/master

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TiendaComponent,
    LoginComponent,
    BibliotecaComponent,
<<<<<<< HEAD
=======
    CarritoComponent
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
<<<<<<< HEAD
    MatInputModule,
    FormsModule,
=======
    MatTooltipModule,
>>>>>>> origin/master
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
