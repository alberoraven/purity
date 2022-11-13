import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iservice } from '../../providers/interface';

import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  service: Iservice;

  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location'
  };

  constructor(private router: Router, public popoverCtrl: PopoverController) { 
    const data = this.router?.getCurrentNavigation()?.extras?.state;
    if (data) this.service = data; else this.router.navigate(['home'])
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

  ngOnInit(): void {
    
  }

}
