import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ScrollSpyService, ScrollObjectInterface } from '@uniprank/ngx-scrollspy';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollElement = new BehaviorSubject<string>(null);
  scrollSection = this.scrollElement.asObservable();

  constructor(private scrollSpyService: ScrollSpyService, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollSpyService.setOffset('window', 50);
      this.scrollSpyService.observe('window').subscribe((element: ScrollObjectInterface) => {
        element ? this.scrollElement.next(element.id) : this.scrollElement.next(null);
      });
    }
  }
}
