import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  currentLang: string;
  language: string;
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

  ngOnInit(): void {}
}
