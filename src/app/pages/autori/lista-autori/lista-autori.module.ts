import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAutoriPageRoutingModule } from './lista-autori-routing.module';

import { ListaAutoriPage } from './lista-autori.page';
import { ToolbarSuperioreModule } from 'src/app/components/toolbar-superiore/toolbar-superiore.module';
import { ToolbarInferioreModule } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.module';
import { OggettoAutoreModule } from 'src/app/components/oggetto-autore/oggetto-autore.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAutoriPageRoutingModule,
    ToolbarSuperioreModule,
    ToolbarInferioreModule,
    OggettoAutoreModule
  ],
  declarations: [ListaAutoriPage]
})
export class ListaAutoriPageModule {}
