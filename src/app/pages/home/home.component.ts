import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'; 
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation, SwiperOptions } from "swiper";
import { IService } from '../../providers/service-data/service.modal';
import { SevicesProvider } from '../../providers/service-data/service.data';
import { GetServiceList } from "../../@shared/queries";


// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  sevicesList: IService[];

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  };

  constructor(
    private router: Router,
    private _sevicesProvider: SevicesProvider,
  ) { }

  async ngOnInit() {
    await this._sevicesProvider.serviceListGraphql(GetServiceList()).then(res => {
      this.sevicesList = res;
    });
  }

  onSlideChange() {
    // this._sevicesProvider.getserviceList().subscribe(res => {
    //   console.log(res);
    // })
  }

  onClickService(event) {
    this.router.navigate([`service/${event.sid}`], { state: event });
  }


}
