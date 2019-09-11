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
  scrollElement: any;

  constructor(public scrollService: ScrollService) { }

  ngOnInit() {
  }

  toggleBurger() {
    this.burgerIsActive = !this.burgerIsActive;
  }
}
