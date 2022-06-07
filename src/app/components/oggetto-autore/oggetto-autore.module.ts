import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OggettoAutoreComponent } from './oggetto-autore.component';



@NgModule({
  declarations: [OggettoAutoreComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [OggettoAutoreComponent]
})
export class OggettoAutoreModule { }
