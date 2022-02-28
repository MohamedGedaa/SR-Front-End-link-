import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LatestNewsService } from '../../home/services/latest-news.service';
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  newsDetails: any={};
  id: string;
  constructor(private latestNews:LatestNewsService,private _ActivatedRoute:ActivatedRoute) {
    this.id = _ActivatedRoute.snapshot.params.id;
   }
  
  ngOnInit(): void {
    console.log(this.latestNews);
    this.latestNews.getNewsById(this.id).subscribe(res => {
      this.newsDetails = res
      console.log(this.newsDetails)
    }, err => { console.log(err) })
  }
}

