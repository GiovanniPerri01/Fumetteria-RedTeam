import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaCategoriaPageRoutingModule } from './crea-categoria-routing.module';

import { CreaCategoriaPage } from './crea-categoria.page';
import { ToolbarSuperioreModule } from 'src/app/components/toolbar-superiore/toolbar-superiore.module';
import { ToolbarInferioreModule } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaCategoriaPageRoutingModule,
    ToolbarSuperioreModule,
    ToolbarInferioreModule,
    ReactiveFormsModule
  ],
  declarations: [CreaCategoriaPage]
})
export class CreaCategoriaPageModule {}
