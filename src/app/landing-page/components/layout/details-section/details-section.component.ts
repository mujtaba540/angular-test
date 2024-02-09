import { Component, input } from '@angular/core';
import { IDetails } from '../../../../shared/interfaces/IDetails';

@Component({
  selector: 'app-details-section',
  standalone: true,
  imports: [],
  templateUrl: './details-section.component.html',
  styleUrl: './details-section.component.css',
})
export class DetailsSectionComponent {
  details = input.required<IDetails>();
}
