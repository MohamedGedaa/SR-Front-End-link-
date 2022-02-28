import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContentLayoutComponent } from './theme/content-layout/content-layout.component';
import { LandingLayoutComponent } from './theme/landing-layout/landing-layout.component';
 const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ]
  },
  {
    path: 'News',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
         loadChildren: () =>
        import('./pages/news/news.module').then((m) => m.NewsModule),
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
