import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './layouts/inicio/inicio.component';
import { LoginComponent } from './screens/login/login.component';
import { SignInComponent } from './screens/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'sign',
    component: SignInComponent,
    //loadChildren: () => import('../app/screens/sign-in/sign-in.module').then(m => m.sign-inModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    // loadChildren: () => import('../app/screens/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'inicio',
    component: InicioComponent,
    loadChildren: () =>
      import('./layouts/inicio/inicio.module').then((m) => m.InicioModule),
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
