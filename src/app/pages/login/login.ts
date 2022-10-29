import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { nhost } from '../../providers/global';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  
  constructor(
    public userData: UserData,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (nhost.auth.getUser()) {
        this.router.navigateByUrl('/app/tabs/schedule');
      } 
    });
  }

  async oAuthLogin() {
    await nhost.auth.signIn({
      provider: 'google',
      options: {
        redirectTo: '/app/tabs/schedule'
      }
    })
  }

  async onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      await nhost.auth.signIn({
        email: form.value.username,
        password: form.value.password
      }).then(res => {
        // console.log(res.session.user.displayName);
        this.userData.login(res.session.user);
        this.router.navigateByUrl('/app/tabs/schedule');
      })
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
