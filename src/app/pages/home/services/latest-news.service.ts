import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LatestNewsService {
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Retrieve all news list  
   */
  getNewsList(): Observable<any> { 
    return this.http.get<any>(
      `${environment.news}`      
    );
  }
    /**
   * Retrieve news by id  
   */
     getNewsById(id:string): Observable<any> { 
       let index= Number(id);
       let newId= index - 1;
      return this.http.get<any>(
        `${environment.newsDetails}${newId}`      
      );
    }
}
