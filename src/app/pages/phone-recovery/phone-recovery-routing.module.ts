import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneRecoveryComponent } from "./phone-recovery.component";

const routes: Routes = [
  {
    path: '',
    component: PhoneRecoveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneRecoveryRoutingModule { }
