import { ScrollString } from './../../enums/ScrollString';
import { ScrollService } from './../../services/scroll.service';
import { Component, OnInit } from '@angular/core';
import { ScrollSpyService, ScrollObjectInterface } from '@uniprank/ngx-scrollspy';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  burgerIsActive: boolean = false;
  scrollElement = null;
  scrollString = "";

  constructor(public scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollService.scrollSection.subscribe((value) => {
      this.scrollElement = value;
      this.scrollString = ScrollString[value] || "";
    })
  }

  toggleBurger() {
    this.burgerIsActive = !this.burgerIsActive;
  }
}
