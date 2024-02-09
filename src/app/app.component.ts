import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './landing-page/components/layout/hero-section/hero-section.component';
import { VideoSectionComponent } from './landing-page/components/layout/video-section/video-section.component';
import { ProjectsSectionComponent } from './landing-page/components/layout/projects-section/projects-section.component';
import { FrameSectionComponent } from './landing-page/components/layout/frame-section/frame-section.component';
import { DetailsSectionComponent } from './landing-page/components/layout/details-section/details-section.component';
import { IDetails } from './shared/interfaces/IDetails';
import { TeamSectionComponent } from './landing-page/components/layout/team-section/team-section.component';
import { LifeSectionComponent } from './landing-page/components/layout/life-section/life-section.component';
import { FooterSectionComponent } from './landing-page/components/layout/footer-section/footer-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroSectionComponent,
    VideoSectionComponent,
    ProjectsSectionComponent,
    FrameSectionComponent,
    DetailsSectionComponent,
    TeamSectionComponent,
    LifeSectionComponent,
    FooterSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-test';
  details: IDetails[] = [
    {
      index: '01',
      image: 'assets/images/one.png',
      title: 'Development',
      subTitle: 'Web',
      list: [
        'Web Development',
        'Frontend Development',
        'Backend Development',
        'Product Analytics',
        'Technical Writing & QA',
      ],
    },
    {
      index: '02',
      image: 'assets/images/two.png',
      title: 'Application',
      subTitle: 'Mobile',
      list: [
        'iOS Development',
        'Android Development',
        'Backend Development',
        'Product Analytics',
        'Technical Writing & QA',
      ],
    },
    {
      index: '03',
      image: 'assets/images/three.png',
      title: 'Intelligence',
      subTitle: 'Artificielle',
      list: [
        'Résoudre des problèmes',
        'D’accomplir des tâches multiples',
        'Booster le Big Data',
        'Exécuter des tâches plus complexes',
      ],
    },
    {
      index: '04',
      image: 'assets/images/four.png',
      title: 'UI/UX',
      subTitle: 'Designer',
      list: [
        'Art Direction',
        'UI/UX Design',
        'Motion Design',
        'UX Review',
        '3D Design',
      ],
    },
  ];
}
