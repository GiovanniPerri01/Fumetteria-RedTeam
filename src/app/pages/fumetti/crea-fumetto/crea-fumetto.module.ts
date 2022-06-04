import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaFumettoPageRoutingModule } from './crea-fumetto-routing.module';

import { CreaFumettoPage } from './crea-fumetto.page';
import { ToolbarInferioreModule } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.module';
import { ToolbarSuperioreModule } from 'src/app/components/toolbar-superiore/toolbar-superiore.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaFumettoPageRoutingModule,
    ToolbarInferioreModule,
    ToolbarSuperioreModule
  ],
  declarations: [CreaFumettoPage]
})
export class CreaFumettoPageModule {}
