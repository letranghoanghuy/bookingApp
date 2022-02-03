import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    items: 4,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    autoHeight: false,
    autoplay: true,
    responsive: {

      0: {
        items: 1,
      },

      480: {
        items: 2,
      },

      768: {
        items: 3,
      },

      992: {
        items: 4,
      }
    },
    nav: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
