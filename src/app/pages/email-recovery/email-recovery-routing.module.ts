import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailRecoveryComponent } from "./email-recovery.component";

const routes: Routes = [
  {
    path: '',
    component: EmailRecoveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRecoveryRoutingModule { }
