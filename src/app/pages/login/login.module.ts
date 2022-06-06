import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ToolbarInferioreModule } from 'src/app/components/toolbar-inferiore/toolbar-inferiore.module';
import { ToolbarSuperioreModule } from 'src/app/components/toolbar-superiore/toolbar-superiore.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ToolbarInferioreModule,
    ToolbarSuperioreModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
