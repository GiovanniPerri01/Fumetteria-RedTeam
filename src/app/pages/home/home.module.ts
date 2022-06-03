import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ToolbarSuperioreModule } from 'src/app/components/toolbar-superiore/toolbar-superiore.module';
import { ToolbarInferioreModule } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ToolbarSuperioreModule,
    ToolbarInferioreModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
