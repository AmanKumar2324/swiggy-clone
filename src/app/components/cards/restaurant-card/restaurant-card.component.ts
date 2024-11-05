import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  @Input() imageUrl!: string;
  @Input() offerText!: string;
  @Input() restaurantName!: string;
  @Input() ratings!: number;
  @Input() dishes!: string[];
  @Input() address!: string;


}
