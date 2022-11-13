import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-recovery',
  templateUrl: './phone-recovery.component.html',
  styleUrls: ['./phone-recovery.component.scss']
})
export class PhoneRecoveryComponent implements OnInit {

  phoneform: any = { phone: ''};
  submitted = false;
  
  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }


  async onPhoneSubmit(form: NgForm) {
    this.submitted = true;
    this.router.navigateByUrl('/reset-password');
    if (form.valid) {
        console.log("asd");
    }
  }

}
