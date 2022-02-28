import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoWidth: true,
    items:1,
    navSpeed: 700,
    navText: ['<span class="icon-arrow-left"></span>', '<span class="icon-arrow-right"></span>'],
    nav: true,
  }


  constructor() { }

  ngOnInit(): void {
  }

}
