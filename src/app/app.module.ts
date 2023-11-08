import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './layouts/inicio/inicio.component';
import { TiendaComponent } from './screens/tienda/tienda.component';
import { LoginComponent } from './screens/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BibliotecaComponent } from './screens/biblioteca/biblioteca.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TiendaComponent,
    LoginComponent,
    BibliotecaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
