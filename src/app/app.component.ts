import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TopDishesComponent } from "./components/sections/top-dishes/top-dishes.component";
import { TopRestaurantsComponent } from "./components/sections/top-restaurants/top-restaurants.component";
import { ExploreRestaurantsComponent } from "./components/sections/explore-restaurants/explore-restaurants.component";
import { BestPlacesComponent } from "./components/sections/best-places/best-places.component";
import { CuisinesComponent } from "./components/sections/cuisines/cuisines.component";
import { EveryRestrauntComponent } from "./components/sections/every-restraunt/every-restraunt.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RestaurantMenuComponent } from "./pages/restaurant-menu/restaurant-menu.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TopDishesComponent, TopRestaurantsComponent, ExploreRestaurantsComponent, BestPlacesComponent, CuisinesComponent, EveryRestrauntComponent, FooterComponent, RestaurantMenuComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggy-clone';
}
