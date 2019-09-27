import { Component, ElementRef, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-new-cv';
  userActivity;
  userInactive: Subject<any> = new Subject();
  isInactive = false;

  constructor() {
    this.setTimeout();
    this.userInactive.subscribe(() => {
      this.isInactive = true;
    });


    console.log(`%c 
     ______________
   <  Bienvenue !!  >
     -------------
           \\   ^__^
            \\  (oo)\\_______
               (__)\\       )\\/\\
                   ||----w |
                   ||     ||`, "font-family:monospace");
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 60000);
  }

  @HostListener('window:mousemove') onMouse() {
    clearTimeout(this.userActivity);
    this.isInactive = false;
    this.setTimeout();
  }

  @HostListener('window:scroll') onScroll() {
    clearTimeout(this.userActivity);
    this.isInactive = false;
    this.setTimeout();
  }
}

