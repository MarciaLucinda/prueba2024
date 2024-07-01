import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NuevopruebaComponent}  from '../components/nuevoprueba/nuevoprueba.component';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [AppComponent,NuevopruebaComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PruebaModule { }
