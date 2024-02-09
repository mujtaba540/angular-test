import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-video-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.css',
})
export class VideoSectionComponent {
  isZoomed: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.scrollY;
    this.isZoomed = scrollPosition > 100;
  }
}
