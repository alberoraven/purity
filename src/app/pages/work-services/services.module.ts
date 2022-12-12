import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SevicesProvider } from '../../providers/service-data/service.data';


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
  ],
  providers: [SevicesProvider]
})
export class ServicesModule { }
