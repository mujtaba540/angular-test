import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IWorkLife } from '../../../../shared/interfaces/IWorkLife';

@Component({
  selector: 'app-life-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-section.component.html',
  styleUrl: './life-section.component.css',
})
export class LifeSectionComponent implements OnInit {
  workLife!: IWorkLife[];
  ngOnInit(): void {
    this.workLife = [
      {
        image: 'assets/images/mask-one.png',
        title: 'Humain',
        borderClass: 'border-dashed border-r-2 border-b-2 border-black',
      },
      {
        image: 'assets/images/mask-two.png',
        title: 'Eco Responsable',
        borderClass: 'border-dashed border-r-2 border-b-2 border-black',
      },
      {
        image: 'assets/images/mask-three.png',
        title: 'Eco Responsable',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere distinctio aut quibusdam! Dolorem vel cupiditate doloremque tempore quidem vero!',
        buttonText: 'Savour Plus',
        activeTitleClass: 'text-yellow',
        borderClass: 'border-dashed  border-b-2 border-black',
      },
    ];
  }
}
