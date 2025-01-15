import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../componente/cabecalho/cabecalho.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [CabecalhoComponent],
  imports: [
    CommonModule,
    FormsModule,
    FormsModule, 
    RouterLink,
    PrimeNgModule

  ],

  exports:[
      CabecalhoComponent
  ]
})
export class BaseModule { }
