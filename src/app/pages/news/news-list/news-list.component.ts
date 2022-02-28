import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from '../../home/services/latest-news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsList:any[]=[];
  newNewslist : any[]=[];
  constructor(private latestNews: LatestNewsService) { }

  ngOnInit(): void {
    this.latestNews.getNewsList().subscribe(res => {
      this.newsList = res.News
      this.newNewslist = this.newsList.slice(0,6)
      console.log(this.newsList)
    }, err => { console.log(err) })
  }
  showMore() {
    let newLength = this.newNewslist.length + 3;
    console.log(newLength)
    if (newLength > this.newsList.length) {
        newLength = this.newsList.length
        console.log(newLength)
    }
     this.newNewslist = this.newsList.slice(0, newLength);
     console.log(this.newNewslist)
     if (this.newNewslist.length == this.newsList.length) {
        console.log("match")
     }
  }


}
