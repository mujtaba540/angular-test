import { Component, OnInit } from '@angular/core';
import { ISpheres } from '../../../../shared/interfaces/IHero';

@Component({
  selector: 'app-frame-section',
  standalone: true,
  imports: [],
  templateUrl: './frame-section.component.html',
  styleUrl: './frame-section.component.css',
})
export class FrameSectionComponent implements OnInit {
  marqueeClass!: ISpheres[];
  marqueeText!: string;
  ngOnInit(): void {
    this.marqueeText = 'EXPERTISES';
    this.marqueeClass = [
      { class: 'text-white text-5xl' },
      { class: 'text-5xl background-text' },
      { class: 'text-white text-5xl' },
      { class: 'text-5xl background-text' },
      { class: 'text-white text-5xl' },
      { class: 'text-5xl background-text' },
    ];
  }
}
