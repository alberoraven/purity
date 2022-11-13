import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ForgetComponent } from './forget.component';
import { ForgetRoutingModule } from './forget-routing.module';


@NgModule({
  declarations: [ForgetComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetRoutingModule
  ]
})
export class ForgetModule { }
