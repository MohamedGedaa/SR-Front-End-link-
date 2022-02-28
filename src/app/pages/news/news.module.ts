import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsRoutingModule } from './news-routing.module';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListComponent } from './news-list/news-list.component';
 
 

/**
 * Contains profile services, components, directives and pipes.
 */

@NgModule({
  declarations: [
  NewsDetailsComponent,
  NewsListComponent
  ],
  imports: [    
    CommonModule,
    FormsModule,
    NewsRoutingModule   
  ],
  exports: [
    CommonModule,
    FormsModule,
   
    
  ],
  providers: [],
})
export class NewsModule {}
