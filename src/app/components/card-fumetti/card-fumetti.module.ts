import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardFumettiComponent } from './card-fumetti.component';



@NgModule({
  declarations: [CardFumettiComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[CardFumettiComponent]
})
export class CardFumettiModule { }
