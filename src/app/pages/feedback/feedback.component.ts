import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

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

  onClickHalfStar($event) {
    document.querySelectorAll('.half').forEach(element => {
      element.classList.remove('star-colour');
    });
    $event.target.classList.add('star-colour');
    document.querySelector('.rating .js-score').innerHTML = $event.target.getAttribute("data-value");
  }

  onClickFullStar($event) {
    document.querySelectorAll('.full').forEach(element => {
      element.classList.remove('star-colour');
      element.parentElement.classList.remove('animate');
      element.parentElement.querySelector('.half').classList.remove('star-colour');
    });
    $event.target.classList.add('star-colour');
    $event.target.parentElement.classList.add('animate');
    document.querySelector('.rating .js-score').innerHTML = $event.target.getAttribute("data-value");
  }


  // setHalfStarState(target) {
  //   target.classList.add('star-colour');
  //   document.querySelectorAll('half').forEach(element => {
  //     element.classList.remove('star-colour');
  //   });
  // }

}
