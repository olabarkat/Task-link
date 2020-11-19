import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BidiModule } from '@angular/cdk/bidi';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';


import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './home/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { FEATURESComponent } from './home/features/features.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AboutComponent } from './home/about/about.component';

import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './home/footer/footer.component';

import { NewsComponent } from './news/news.component';
import { NewDetailsComponent } from './new-details/new-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    FEATURESComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
 
    NewsComponent,
    NewDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    MatNativeDateModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatMenuModule,
    BidiModule,
    CarouselModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
