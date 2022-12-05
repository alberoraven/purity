import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ServicesRoutingModule } from './services-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services.component';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ServicesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ServicesModule { }
