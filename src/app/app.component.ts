import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TopDishesComponent } from "./components/sections/top-dishes/top-dishes.component";
import { TopRestaurantsComponent } from "./components/sections/top-restaurants/top-restaurants.component";
import { ExploreRestaurantsComponent } from "./components/sections/explore-restaurants/explore-restaurants.component";
import { BestPlacesComponent } from "./components/sections/best-places/best-places.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TopDishesComponent, TopRestaurantsComponent, ExploreRestaurantsComponent, BestPlacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggy-clone';
}
