import { ScrollString } from './../../enums/ScrollString';
import { ScrollService } from './../../services/scroll.service';
import { Component, OnInit } from '@angular/core';
import { ScrollSpyService, ScrollObjectInterface } from '@uniprank/ngx-scrollspy';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(public scrollService: ScrollService, public translate: TranslateService) {
    this.translate.addLangs(['fr', 'eng']);
    this.translate.setDefaultLang('fr');
    this.lang = "fr";
  }


  ngOnInit() {
    this.scrollService.scrollSection.subscribe((value) => {
      this.scrollElement = value;
      this.scrollString = ScrollString[value] || "";
    });

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

  toggleBurger() {
    this.burgerIsActive = !this.burgerIsActive;
  }

  changeLang(lang) {
    this.translate.use(lang);
    this.lang = lang;
    localStorage.setItem('lang', lang);
  }
}
