import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../ui/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { IListItems, ISpheres } from '../../../../shared/interfaces/IHero';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements OnInit {
  spheres!: ISpheres[];
  listText!: IListItems[];
  ngOnInit(): void {
    this.spheres = [
      { class: 'h-64 w-64 sphere-blue pulse-animation' },
      { class: 'h-80 w-80 sphere-purple pulse-animation' },
      { class: 'h-96 w-96 sphere-green ' },
    ];
    this.listText = [
      { title: 'design', class: 'text-sm md:text-base uppercase' },
      {
        title: 'ui / ux designer',
        class: 'text-base md:text-lg text-white-gray uppercase',
      },
      {
        title: 'development web',
        class: 'text-lg md:text-3xl text-light-green uppercase',
      },
      {
        title: 'application mobile',
        class: 'text-3xl md:text-6xl tracking-wide background-text uppercase',
      },
      {
        title: 'intelligence artificielle',
        class: 'text-lg md:text-3xl background-text uppercase',
      },
      {
        title: 'branding',
        class: 'text-base md:text-lg text-light-green uppercase',
      },
      { title: 'aji group', class: 'text-sm md:text-base font-bold uppercase' },
    ];
  }
}
