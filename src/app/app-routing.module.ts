
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewDetailsComponent } from './new-details/new-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'News', component: NewsComponent, pathMatch: 'full' },
  {path: 'NewsDetails' , component: NewDetailsComponent,pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
