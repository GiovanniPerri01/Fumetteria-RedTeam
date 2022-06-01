import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolbarInferioreComponent } from '../toolbar-inferiore/toolbar-inferiore.component';
import { ToolbarSuperioreComponent } from './toolbar-superiore.component';



@NgModule({
  declarations: [ToolbarSuperioreComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
  ,exports: [ToolbarSuperioreComponent]
})
export class ToolbarSuperioreModule { }
