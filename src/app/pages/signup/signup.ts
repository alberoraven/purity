import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { nhost } from '../../providers/global';

import { UserOptions } from '../../interfaces/user-options';




@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;
  constructor(
    public router: Router,
    public userData: UserData
  ) { }

  async onSignup(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      // this.userData.signup(this.signup.username);
      await nhost.auth.signUp({
        email: form.value.username,
        password: form.value.password,
        // options: {
        //   allowedRoles: ['vendor']
        // }
      }).then((res) => {
        console.log(res);
        // this.router.navigateByUrl('/app/tabs/schedule');
      })
    }
  }
}
