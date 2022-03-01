import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from '../services/latest-news.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoWidth: true,
    margin:20,
    navSpeed: 700,
    navText: ['<div class="circle"><span class="icon-arrow-left"></span></div>', '<div class="circle"><span class="icon-arrow-right"></i></div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2 
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  newsList: any[]=[];
  showStatus:string = 'yes';
  constructor(private latestNews: LatestNewsService) { }

  

  ngOnInit(): void {
    this.latestNews.getNewsList().subscribe(res => {
      this.newsList = res.News
      console.log(this.newsList)
    }, err => { console.log(err) })
  }

}
