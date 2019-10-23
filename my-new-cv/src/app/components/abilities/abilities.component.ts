import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit, OnDestroy {


  progress = 0;
  private subscription: Subscription;
  constructor(public scrollService: ScrollService) { }

  ngOnInit() {
    this.subscription = this.scrollService.scrollSection.subscribe((value) => {
      if (value === "section-abilities") {
        for (let index = 0; index < 100; index = index + 1) {
          setTimeout(() => {
            this.progress = index + 1;
          }, 10 * index);

        }
      }
    });

  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
