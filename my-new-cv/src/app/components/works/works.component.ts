import { ScrollService } from 'src/app/services/scroll.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0', transform: 'scaleX(0.8)' }),
        animate('.2s ease-out', style({ opacity: '1', transform: 'scaleX(1)' })),
      ]),
      transition(':leave', [
        style({ opacity: '1', transform: 'scaleX(1)' }),
        animate('.2s ease-out', style({ opacity: '0', transform: 'scaleX(0.8)' })),
      ]),
    ]),
  ]
})
export class WorksComponent implements OnInit {

  activeFilter = 'all';

  projects = [];

  data = [
  { name: "Smart Metronome", description: " vla blabla bla blzb  bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla", img: "smartmetro.jpg", type: "perso" },
  { name: "Second", description: " vla blabla bla blzb  bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla", img: "sample.jpg", type: "perso" },
  { name: "Troisieme", description: " vla blabla bla blzb  bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla", img: "sample.jpg", type: "pro" },
  { name: "Quatrieme", description: " vla blabla bla blzb  bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla", img: "sample.jpg", type: "perso" },
  { name: "Fivieme", description: " vla blabla bla blzb  bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla", img: "sample.jpg", type: "pro" },
  { name: "Sixiemee", description: " vla blabla bla blzb  bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla", img: "sample.jpg", type: "pro" },
  { name: "Septieme", description: " vla blabla bla blzb  bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla", img: "sample.jpg", type: "perso" },
  { name: "Huitieme", description: " vla blabla bla blzb  bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla", img: "sample.jpg", type: "perso" },
  { name: "Neuvieme", description: " vla blabla bla blzb  bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla", img: "sample.jpg", type: "pro" },
  { name: "Dix", description: " vla blabla bla blzb  bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla blabla bla blzbla vlavlalvla vla", img: "sample.jpg", type: "pro" },
];


  animate = false;
  selectedProject: any= null;

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.projects = this.data;
    this.scrollService.scrollSection.subscribe((value) => {
      if (value === "section-works") {
        this.animate = true;
      }
    });
  }

  filterWorks(value) {
    this.projects = [];
    this.activeFilter = value;
    if (value === 'all') {
      this.projects = this.data;

    } else {
      this.projects = this.data.filter(x => x.type === value);
    }
  }

  selectProject(project){
    this.selectedProject = project;
  }

}
