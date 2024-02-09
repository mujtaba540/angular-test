import { Component, OnInit } from '@angular/core';
import { ISpheres } from '../../../../shared/interfaces/IHero';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.css',
})
export class TeamSectionComponent implements OnInit {
  spheres!: ISpheres[];
  ngOnInit(): void {
    this.spheres = [
      { class: 'h-64 w-64 sphere-blue self-start' },
      { class: 'h-80 w-80 sphere-purple self-bottom' },
      { class: 'h-96 w-96 sphere-green ' },
    ];
  }
}
