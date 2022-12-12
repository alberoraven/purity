import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    FeedbackRoutingModule,
    ReactiveFormsModule
  ]
})
export class FeedbackModule { }
