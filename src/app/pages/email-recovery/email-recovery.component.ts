import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-recovery',
  templateUrl: './email-recovery.component.html',
  styleUrls: ['./email-recovery.component.scss']
})
export class EmailRecoveryComponent implements OnInit {
  emailForm: any = { email: ''};
  submitted = false;
  
  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }


  async onEmailSubmit(form: NgForm) {
    this.submitted = true;
    this.router.navigateByUrl('/reset-password');
    if (form.valid) {
        console.log("asd");
    }
  }

}
