import { ScrollService } from 'src/app/services/scroll.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Subscription } from 'rxjs';

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
export class WorksComponent implements OnInit, OnDestroy {

  activeFilter = 'all';

  projects = [];

  data = [
    {
      name: "Smart Metronome", description: "WORKS.PROJECTS.SM.LEAD",
      buttons: [
        {
          link: "https://smart-metronome.etiennepuissant.eu/",
          type: "classic"
        },
        {
          link: "https://github.com/NevinDry/smart-metronome",
          type: "github"
        }
      ],
      content: "WORKS.PROJECTS.SM.CONTENT",
      img: "smartmetro-compressor.jpg", type: "perso",
      tools: ["js-compressor.jpg", "react-compressor.png", "pwa-compressor.png", "firebase-compressor.png"]
    },
    {
      name: "Mean Stack Blog", description: "WORKS.PROJECTS.BLOG.LEAD",
      content: "WORKS.PROJECTS.BLOG.CONTENT",
      buttons: [
        {
          link: "https://mean-stack-blog.etiennepuissant.eu",
          type: "classic"
        },
        {
          link: "https://github.com/NevinDry/mean-stack-blog",
          type: "github"
        }
      ],
      img: "blog-compressor.jpg", type: "perso",
      tools: ["angular-compressor.png", "boostrap-compressor.png", "express-compressor.png", "mongo-compressor.png"]
    },
    {
      name: "Temtem Tools", description: "WORKS.PROJECTS.TEMTEM.LEAD",
      content: "WORKS.PROJECTS.TEMTEM.CONTENT",
      buttons: [
        {
          link: "https://github.com/NevinDry/temtemtools/tree/develop",
          type: "github"
        }
      ],
      img: "temtem-compressor.jpg", type: "perso",
      tools: ["react-compressor.png", "materialui-compressor.png", "firebase-compressor.png", "firestore-compressor.png"]
    },
    {
      name: "Chiropracteur", description: "WORKS.PROJECTS.CHIRO.LEAD",
      content: "WORKS.PROJECTS.CHIRO.CONTENT",
      buttons: [
        {
          link: "https://chiropracteur-cognac.firebaseapp.com/",
          type: "classic"
        }
      ],
      img: "ifec-compressor.png", type: "perso",
      tools: ["angular-compressor.png", "bulma-compressor.png", "firebase-compressor.png"]
    },
    {
      name: "Space Invaders 3D", description: "WORKS.PROJECTS.SPACE.LEAD",
      content: "WORKS.PROJECTS.SPACE.CONTENT",
      buttons: [
        {
          link: "http://spaceinvaders3d.etiennepuissant.eu/",
          type: "classic"
        },
        {
          link: "https://github.com/NevinDry/spaceInvaders3D",
          type: "github"
        }
      ],
      img: "space-compressor.jpg", type: "perso",
      tools: ["js-compressor.jpg", "threejs-compressor.png", "php-compressor.png"]
    },
    {
      name: "Google Glass", description: "WORKS.PROJECTS.GGLASS.LEAD",
      content: "WORKS.PROJECTS.GGLASS.CONTENT",
      img: "gglass-compressor.jpg", type: "pro",
      tools: ["java-compressor.png", "iosand-compressor.png"]
    },
    {
      name: "BA365 App", description: "WORKS.PROJECTS.BA365.LEAD",
      content: "WORKS.PROJECTS.BA365.CONTENT",
      img: "ba365-compressor.jpg", type: "pro",
      tools: ["angular-compressor.png", "tns-compressor.png", "iosand-compressor.png", "estimote-compressor.png"]
    },
    {
      name: "Garorock tweet war", description: "WORKS.PROJECTS.GARO.LEAD",
      content: "WORKS.PROJECTS.GARO.CONTENT",
      buttons: [
        {
          link: "https://github.com/NevinDry/garorockVIP",
          type: "github"
        }
      ],
      img: "garorock-compressor.jpg", type: "pro",
      tools: ["php-compressor.png", "js-compressor.jpg", "htmlcss-compressor.png", "boostrap-compressor.png"]
    },
  ];


  animate = false;
  selectedProject: any = null;
  private subscription: Subscription;

  constructor(private scrollService: ScrollService, private _scrollToService: ScrollToService) { }

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

  selectProject(project) {
    this.selectedProject = project;

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
