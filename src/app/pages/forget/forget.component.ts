import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})

export class ForgetComponent implements OnInit {
  forget: any = { oldpassword: '', newpassword: '' };
  submitted = false;
  
  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }


  async onForget(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
        console.log("asd");
    }
  }
}



