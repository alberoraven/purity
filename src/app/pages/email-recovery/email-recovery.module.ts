import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EmailRecoveryComponent } from "./email-recovery.component";
import { EmailRecoveryRoutingModule } from './email-recovery-routing.module';
import { AnimationModule } from "../../animation/animation.module";

@NgModule({
  declarations: [EmailRecoveryComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailRecoveryRoutingModule,
    AnimationModule
  ]
})
export class EmailRecoveryModule { }
