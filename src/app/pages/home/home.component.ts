import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'; 
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation, SwiperOptions } from "swiper";
import { Iservice } from '../../providers/interface';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  sevices: Iservice[] = [
    {
      image: "seattle",
      mainTitle: "Dishes Cleaning",
      rating: 3,
      price: "$125",
      duration: "30min",
      details: "Farhan Rio Agent Manager Dishes Cleaning Car Cleaning Outdoor Cleaning Furniture Cleaning Kitchen Cleaning Clean Water Pipe Door Cleaning Dishes Cleaning for Rob As a app web crawler expert."
    },
    {
      image: "chicago",
      mainTitle: "Door Cleaning",
      rating: 3,
      price: "$125",
      duration: "30min",
      details: "Farhan Rio Agent Manager Dishes Cleaning Car Cleaning Outdoor Cleaning Furniture Cleaning Kitchen Cleaning Clean Water Pipe Door Cleaning Dishes Cleaning for Rob As a app web crawler expert."
    },
    {
      image: "madison",
      mainTitle: "Furniture Cleaning",
      rating: 3,
      price: "$125",
      duration: "30min",
      details: "Farhan Rio Agent Manager Dishes Cleaning Car Cleaning Outdoor Cleaning Furniture Cleaning Kitchen Cleaning Clean Water Pipe Door Cleaning Dishes Cleaning for Rob As a app web crawler expert."
    },
    {
      image: "austin",
      mainTitle: "Apartment Cleaning",
      rating: 3,
      price: "$125",
      duration: "30min",
      details: "Farhan Rio Agent Manager Dishes Cleaning Car Cleaning Outdoor Cleaning Furniture Cleaning Kitchen Cleaning Clean Water Pipe Door Cleaning Dishes Cleaning for Rob As a app web crawler expert."
    }
  ]

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSlideChange() {
    console.log('slide change');
  }

  onClickService(event) {
    this.router.navigate(['service'], { state: event });
  }


}
