import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarInferioreComponent } from './toolbar-inferiore.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ToolbarInferioreComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule

  ],
  exports: [ToolbarInferioreComponent]
})
export class ToolbarInferioreModule { }
