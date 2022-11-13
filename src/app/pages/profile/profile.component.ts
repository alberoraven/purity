import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profileForm : FormGroup;
  public preview: string;
  constructor(private profileFormBuilder: FormBuilder) {
    this.profileForm = this.profileFormBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[(6|7|8|9)]{1}[0-9]{9}')]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      city: ['CHENNAI', [Validators.required, Validators.minLength(3)]],
      state: ['TAMIL NADU', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.profileForm.controls['city'].disable();
    this.profileForm.controls['state'].disable();
  }

  public onProfileSubmit() {
    if (!this.profileForm.invalid) {
      let formValue = JSON.stringify(this.profileForm.value);
      console.log(formValue);
    }
  }

}
