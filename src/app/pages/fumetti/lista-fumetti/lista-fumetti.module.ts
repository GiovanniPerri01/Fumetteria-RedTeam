import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaFumettiPageRoutingModule } from './lista-fumetti-routing.module';

import { ListaFumettiPage } from './lista-fumetti.page';
import { ToolbarInferioreModule } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.module';
import { ToolbarSuperioreModule } from 'src/app/components/toolbar-superiore/toolbar-superiore.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaFumettiPageRoutingModule,
    ToolbarInferioreModule,
    ToolbarSuperioreModule
  ],
  declarations: [ListaFumettiPage]
})
export class ListaFumettiPageModule {}
