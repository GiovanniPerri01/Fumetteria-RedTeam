import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCategoriePageRoutingModule } from './lista-categorie-routing.module';

import { ListaCategoriePage } from './lista-categorie.page';
import { ToolbarInferioreModule } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.module';
import { ToolbarSuperioreModule } from 'src/app/components/toolbar-superiore/toolbar-superiore.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCategoriePageRoutingModule,
    ToolbarInferioreModule,
    ToolbarSuperioreModule
  ],
  declarations: [ListaCategoriePage]
})
export class ListaCategoriePageModule {}
