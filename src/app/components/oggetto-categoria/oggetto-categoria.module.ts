import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OggettoAutoreComponent } from '../oggetto-autore/oggetto-autore.component';
import { IonicModule } from '@ionic/angular';
import { OggettoCategoriaComponent } from './oggetto-categoria.component';



@NgModule({
  declarations: [OggettoCategoriaComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[OggettoCategoriaComponent]
})
export class OggettoCategoriaModule { }
