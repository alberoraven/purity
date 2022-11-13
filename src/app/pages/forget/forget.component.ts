import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})

export class ForgetComponent implements OnInit {
  
  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }


  onCardReset(url) {
    this.router.navigateByUrl(`/${url}`);
  }
}



