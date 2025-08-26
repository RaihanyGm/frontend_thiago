import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstruturaRoutingModule } from './estrutura-routing-module';
import { Diretivo } from './diretivo/diretivo';


@NgModule({
  declarations: [
    Diretivo
  ],
  imports: [
    CommonModule,
    EstruturaRoutingModule
  ]
})
export class EstruturaModule { }
