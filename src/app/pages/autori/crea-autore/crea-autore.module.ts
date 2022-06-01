import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaAutorePageRoutingModule } from './crea-autore-routing.module';

import { CreaAutorePage } from './crea-autore.page';
import { ToolbarSuperioreModule } from 'src/app/components/toolbar-superiore/toolbar-superiore.module';
import { ToolbarInferioreModule } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaAutorePageRoutingModule,
    ToolbarSuperioreModule,
    ToolbarInferioreModule
  ],
  declarations: [CreaAutorePage]
})
export class CreaAutorePageModule {}
