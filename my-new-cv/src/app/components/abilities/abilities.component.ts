import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {

  progress = 0;
  constructor(public scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollService.scrollSection.subscribe((value) => {
      if (value === "section-abilities") {
        for (let index = 0; index < 100; index = index + 1) {
          setTimeout(() => {
            this.progress = index + 1;
          }, 10 * index);

        }
      }
    });

  }
}
