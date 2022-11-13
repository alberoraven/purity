import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetform: any = { oldpassword: '', newpassword: '' };
  submitted = false;
  
  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }


  async onReset(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
        console.log("asd");
    }
  }

}
