import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IService } from '../../providers/service-data/service.modal';
import { serviceBooking } from "../../@shared/queries";

import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { SevicesProvider } from '../../providers/service-data/service.data';

import { GraphqlService } from "../../providers/api/api.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public graphqlService = new GraphqlService();
  service: any;

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
    public popoverCtrl: PopoverController,
    private _sevicesProvider: SevicesProvider,
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

  ngOnInit(): void { 
    // this.service = this._sevicesProvider.getserviceList();
    // this._sevicesProvider.getserviceList().subscribe(res => {
    //   console.log(res);
    // })
    
  }

  async onbookingFormSubmit() {
    if (!this.bookingForm.invalid && this.service.is_active) {
      let formValue = JSON.stringify(this.bookingForm.value);
      try {
        let sid = this.service.sid;
        let uid = "301a04ee-e81b-4270-addc-847952703a9d";
        let sdate = this.bookingForm.value.slotdate;
        let status = "1";
        console.log(sid, uid, sdate, status);
        const data = await this.graphqlService.executeQuery(serviceBooking(uid, sid, sdate, status));
        
      } catch (error) {
        console.log(error);
      }
      console.log(formValue, this.service);
    }
  }

}
