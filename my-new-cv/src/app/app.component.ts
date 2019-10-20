import { Component, ElementRef, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-new-cv';
  konami = false;

  allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  konamiCodePosition = 0;

  constructor() {
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

  @HostListener('window:keydown', ['$event']) testKonami(e: KeyboardEvent) {
    var key = this.allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = this.konamiCode[this.konamiCodePosition];

    // compare the key with the required key
    if (key == requiredKey) {

      // move to the next key in the konami code sequence
      this.konamiCodePosition++;

      // if the last key is reached, activate cheats
      if (this.konamiCodePosition == this.konamiCode.length) {
        this.konami = true;
        this.konamiCodePosition = 0;
      }
    } else {
      this.konamiCodePosition = 0;
    }
  }
}


