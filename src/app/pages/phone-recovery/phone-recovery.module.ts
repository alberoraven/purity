import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PhoneRecoveryComponent } from './phone-recovery.component';
import { PhoneRecoveryRoutingModule } from './phone-recovery-routing.module';
import { AnimationModule } from "../../animation/animation.module";


@NgModule({
  declarations: [
    PhoneRecoveryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneRecoveryRoutingModule,
    AnimationModule
  ]
})
export class PhoneRecoveryModule { }
