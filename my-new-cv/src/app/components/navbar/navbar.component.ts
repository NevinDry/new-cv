import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  burgerIsActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleBurger() {
    this.burgerIsActive = !this.burgerIsActive;
  }
}
