import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css',
})
export class FooterSectionComponent implements OnInit {
  logos!: string[];
  aboutUs!: string[];
  ngOnInit(): void {
    this.logos = [
      'assets/images/insta.png',
      'assets/images/youtube.png',
      'assets/images/linked.png',
      'assets/svgs/fb.svg',
    ];
    this.aboutUs = [
      'Mentions légales',
      'Politique de cookies',
      'Politique de confidentialité',
      'CGV',
    ];
  }
}
