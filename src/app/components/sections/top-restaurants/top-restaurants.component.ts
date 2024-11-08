// src/app/components/sections/top-restaurants/top-restaurants.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-restaurants',
  templateUrl: './top-restaurants.component.html',
  styleUrls: ['./top-restaurants.component.css'],
  imports: [RouterLink],
  standalone: true
})
export class TopRestaurantsComponent {
  // Sample restaurant data
  restaurants = [
    {
      id: 1,
      name: 'KFC',
      rating: 4.5,
      reviews: 150,
      dishes: ['Pasta', 'Pizza', 'Burgers'],
      address: 'Post office city center',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_355919.JPG'
    },
    {
      id: 2,
      name: 'Dominos',
      rating: 4.3,
      reviews: 200,
      dishes: ['Pizza', 'Garlic Bread', 'Pasta'],
      address: 'Main street, downtown',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_355919.JPG'
    },
    // More restaurant objects can go here
  ];
}
