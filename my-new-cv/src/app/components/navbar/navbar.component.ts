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

  constructor(private scrollSpyService: ScrollSpyService) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.scrollSpyService.setOffset('window', 100);
    this.scrollSpyService.observe('window').subscribe((element: ScrollObjectInterface) => {
      this.scrollElement = element ? element.id : null;
      console.log(this.scrollElement);
    });
  }
  toggleBurger() {
    this.burgerIsActive = !this.burgerIsActive;
  }
}
