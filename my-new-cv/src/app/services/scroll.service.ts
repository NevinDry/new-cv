import { Injectable } from '@angular/core';
import { ScrollSpyService, ScrollObjectInterface } from '@uniprank/ngx-scrollspy';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollElement = new BehaviorSubject<string>(null);
  scrollSection = this.scrollElement.asObservable();

  constructor(private scrollSpyService: ScrollSpyService) {
    this.scrollSpyService.setOffset('window', 50);
    this.scrollSpyService.observe('window').subscribe((element: ScrollObjectInterface) => {
      element ? this.scrollElement.next(element.id) : this.scrollElement.next(null);
    });
  }
}
