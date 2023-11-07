import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioRoutes } from './inicio.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InicioRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
  ]
})

export class InicioModule {}