import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iservice } from '../../providers/interface';

import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  service: Iservice;

  conferenceDate = new Date();
  locationList = [
    {
      name: 'Alwarpet',
      code: 'Alwarpet',
    },
    {
      name: 'Ambattur',
      code: 'Ambattur',
    },
    {
      name: 'Alathur',
      code: 'Alathur'
    }
  ]

  selectOptions = {
    header: 'Select a Location'
  };

  public bookingForm : FormGroup;

  constructor(
    private bookingFormBuilder: FormBuilder,
    private router: Router, 
    public popoverCtrl: PopoverController
    ) {

    const data = this.router?.getCurrentNavigation()?.extras?.state;
    if (data) this.service = data; else this.router.navigate(['home']);

    this.bookingForm = this.bookingFormBuilder.group({
      locality: ['', [Validators.required]],
      slotdate: ['', [Validators.required,]]
    });

    this.bookingForm.controls['locality'].setValue('Alathur');
    this.bookingForm.controls['slotdate'].setValue(moment(new Date()).format('YYYY-MM-DD'));
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

  ngOnInit(): void { }

  onbookingFormSubmit() {
    if (!this.bookingForm.invalid) {
      let formValue = JSON.stringify(this.bookingForm.value);
      console.log(formValue);
    }
  }

}
