import { Component } from '@angular/core';

@Component({
  selector: 'app-top-restaurants',
  templateUrl: './top-restaurants.component.html',
  styleUrls: ['./top-restaurants.component.css'],
  standalone: true
})
export class TopRestaurantsComponent {
  restaurants = [
    {
      name: 'Restaurant 1',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/66be26d6-e3cf-43ad-acb9-dbeb9eded49d_152420.jpg', // Replace with actual image paths
      offer: '50% off on first order',
      rating: 4.5,
      dishes: ['Pizza', 'Pasta', 'Salad'],
      address: '123 Main St, City'
    },
    {
      name: 'Restaurant 2',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_355919.JPG',
      offer: 'Free dessert with every meal',
      rating: 4.0,
      dishes: ['Burger', 'Fries'],
      address: '456 Elm St, City'
    },
    // Add more restaurant objects as needed
  ];
}
