import { Injectable } from '@angular/core';
import { ScrollSpyService, ScrollObjectInterface } from '@uniprank/ngx-scrollspy';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  
  public scrollElement= null;

  constructor(private scrollSpyService: ScrollSpyService) {
    this.scrollSpyService.setOffset('window', 50);
    this.scrollSpyService.observe('window').subscribe((element: ScrollObjectInterface) => {
      this.scrollElement = element ? element.id : null;
    });
  }
}
