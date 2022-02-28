import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingLayoutComponent } from './theme/landing-layout/landing-layout.component';
import { ContentLayoutComponent } from './theme/content-layout/content-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './theme/shared/navbar/navbar.component';
import { BannerComponent } from './theme/shared/banner/banner.component';
import { BreadcrumbComponent } from './theme/shared/breadcrumb/breadcrumb.component';
import { OpportunitiesComponent } from './pages/home/opportunities/opportunities.component';
import { LatestNewsComponent } from './pages/home/latest-news/latest-news.component';
import { FooterComponent } from './theme/shared/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LatestNewsService } from './pages/home/services/latest-news.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingLayoutComponent,
    ContentLayoutComponent,
    HomeComponent,    
    NavbarComponent,
    BannerComponent,
    BreadcrumbComponent,
    OpportunitiesComponent,
    LatestNewsComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [LatestNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
