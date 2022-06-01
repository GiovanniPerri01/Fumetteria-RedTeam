import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaAutorePageRoutingModule } from './crea-autore-routing.module';

import { CreaAutorePage } from './crea-autore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaAutorePageRoutingModule
  ],
  declarations: [CreaAutorePage]
})
export class CreaAutorePageModule {}
