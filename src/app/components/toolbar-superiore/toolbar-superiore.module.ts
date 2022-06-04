import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolbarInferioreComponent } from '../toolbar-inferiore/toolbar-inferiore.component';
import { ToolbarSuperioreComponent } from './toolbar-superiore.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ToolbarSuperioreComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ]
  ,exports: [ToolbarSuperioreComponent]
})
export class ToolbarSuperioreModule { }
