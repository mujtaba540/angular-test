import { Component, OnInit } from '@angular/core';
import { IProjects } from '../../../../shared/interfaces/IProjects';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent implements OnInit {
  projectDetails!: IProjects[];
  title!: string;
  subTitle!: string;
  ngOnInit(): void {
    this.title = 'aji creative';
    this.subTitle = 'nos projects';
    this.projectDetails = [
      { count: '600', textOne: 'projets', textTwo: 'réalisés' },
      { count: '56', textOne: 'collaborateurs', textTwo: 'passionnés' },
      { count: '100%', textOne: 'clients', textTwo: 'satisfaits' },
      { count: '14', textOne: 'années au', textTwo: 'service de nos clients' },
    ];
  }
}
