import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import * as data from '../assets/newsapi.json';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dafa3ny-App';
  currentLang: string;
 
  emp: any = (data as any);
  constructor(public translate: TranslateService) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);

    this.translate.onLangChange.subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }
  ngOnInit(){
    console.log(data);
  
  }
}
