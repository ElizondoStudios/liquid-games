import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './layouts/inicio/inicio.component';
import { TiendaComponent } from './screens/tienda/tienda.component';
import { LoginComponent } from './screens/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BibliotecaComponent } from './screens/biblioteca/biblioteca.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CarritoComponent } from './screens/carrito/carrito.component';
import { SignInComponent } from './screens/sign-in/sign-in.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TiendaComponent,
    LoginComponent,
    BibliotecaComponent,
    CarritoComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
