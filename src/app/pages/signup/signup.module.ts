import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SignupPage } from './signup';
import { SignupPageRoutingModule } from './signup-routing.module';
import { AnimationModule } from "../../animation/animation.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    AnimationModule
  ],
  declarations: [
    SignupPage,
  ]
})
export class SignUpModule { }
