import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as moment from 'moment';

import { serviceBooking, GetService } from "../../@shared/queries";
import { UserData } from "../../providers/user-data";
import { GraphqlService } from "../../providers/api/api.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public graphqlService = new GraphqlService();
  public selectedDate;
  public service: any;

  initialDate = new Date();
  minDate: string;
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
    private userData: UserData,
    ) {
    const data = this.router?.getCurrentNavigation()?.extras?.state;
    if (data) this.service = data; else this.getServiceDetails();
    this.selectedDate = this.dateFormat(new Date())
    this.minDate = this.selectedDate;
    this.bookingForm = this.bookingFormBuilder.group({
      locality: ['', [Validators.required]],
      slotdate: ['', [Validators.required,]]
    });

    this.bookingForm.controls['locality'].setValue('Alathur');
    this.bookingForm.controls['slotdate'].setValue(this.selectedDate);
  }

  async getServiceDetails() {
    let locPath = window.location.href.split('/');
    let serviceId = locPath[locPath.length -1];
    if (Number(serviceId)) {
      try {
        await this.graphqlService.executeQuery(GetService(locPath[locPath.length -1])).then(res => {
          this.service = res?.service_details[0];
        });
      } catch (error) {
        this.router.navigate(['home']);
      }
    } else {
      this.router.navigate(['home']);
    }
  }

  dateFormat(date: Date) {
    return moment(date).format('YYYY-MM-DD');
  }

  changeDate(value: Date) {
    this.selectedDate = value;
  }

  isPresentDate = (dateString: string) => {
    const date = new Date(dateString);
    const currentDate = new Date();
    const utcYear = date.getUTCFullYear();
    const utcMonth = date.getUTCMonth() + 1;
    const utcDate = date.getUTCDate();
    const utcCurrentYear = currentDate.getUTCFullYear();
    const utcCurrentMonth = currentDate.getUTCMonth() + 1;
    const utcCurrentDate = currentDate.getUTCDate();
    if (utcCurrentYear === utcYear) {
      return utcCurrentYear === utcYear && utcMonth >= utcCurrentMonth && utcDate >= utcCurrentDate; 
    } else if (utcCurrentYear < utcYear) {
      return  utcCurrentYear < utcYear;
    }
  };

  ngOnInit(): void { }

  ionViewWillLeave() { 
    document.querySelectorAll("ion-datetime")[0]?.cancel(true);
  }

  async onbookingFormSubmit() {
    if ((!this.bookingForm.invalid) && this.service.is_active) {
      try {
        await this.userData.getUserCredentials().then(async (res: any) => {
          let sid = this.service.sid;
          let uid = res?.id;
          let sdate = this.bookingForm.value.slotdate;
          let status = "1";
          const data = await this.graphqlService.executeQuery(serviceBooking(uid, sid, sdate, status));
        })
      } catch (error) {
        console.log(error);
      }
    }
  }

}
