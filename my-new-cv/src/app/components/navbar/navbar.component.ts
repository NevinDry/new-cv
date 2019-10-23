import { ScrollString } from './../../enums/ScrollString';
import { ScrollService } from './../../services/scroll.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  burgerIsActive: boolean = false;
  scrollElement = null;
  scrollString = "";
  lang: string;

  constructor(public scrollService: ScrollService, @Inject(PLATFORM_ID) private platformId: Object, public translate: TranslateService) {
    this.translate.addLangs(['fr', 'eng']);
    this.translate.setDefaultLang('fr');
    this.lang = "fr";
  }


  ngOnInit() {
    this.scrollService.scrollSection.subscribe((value) => {
      this.scrollElement = value;
      this.scrollString = ScrollString[value] || "";
    });

    if (isPlatformBrowser(this.platformId)) {

      const lang = localStorage.getItem('lang');
      if (lang) {
        this.translate.use(lang);
        this.lang = lang;
      } else {
        if (navigator.language === "fr") {
          this.translate.use("fr");
          this.lang = "fr";

        } else {
          this.translate.use("eng");
          this.lang = "eng";

        }
      }
    }
  }

  toggleBurger() {
    this.burgerIsActive = !this.burgerIsActive;
  }

  changeLang(lang) {
    if (isPlatformBrowser(this.platformId)) {

      this.translate.use(lang);
      this.lang = lang;

      localStorage.setItem('lang', lang);
    }
  }
}
