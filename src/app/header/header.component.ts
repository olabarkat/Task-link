import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentLang: string;
  language: string;
  showme:boolean= false 

  constructor(public translate: TranslateService) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);

    this.language = localStorage.getItem('currentLang');

    window.onscroll = () => {
      if (window.scrollY > 138) {
        document.getElementById('header').classList.toggle('backGrounColor');
      }
    };
  }

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }
  toogleTag(){
    this.showme=!this.showme;
  }





  ngOnInit(): void {
    this.translate.onLangChange.subscribe((lang) => {
      debugger;
      this.language = localStorage.getItem('currentLang');
    });
  }
}
