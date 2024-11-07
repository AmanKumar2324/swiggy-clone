import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TopDishesComponent } from "../../components/sections/top-dishes/top-dishes.component";
import { TopRestaurantsComponent } from "../../components/sections/top-restaurants/top-restaurants.component";
import { ExploreRestaurantsComponent } from "../../components/sections/explore-restaurants/explore-restaurants.component";
import { BestPlacesComponent } from "../../components/sections/best-places/best-places.component";
import { CuisinesComponent } from "../../components/sections/cuisines/cuisines.component";
import { EveryRestrauntComponent } from "../../components/sections/every-restraunt/every-restraunt.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeaderComponent, TopDishesComponent, TopRestaurantsComponent, ExploreRestaurantsComponent, BestPlacesComponent, CuisinesComponent, EveryRestrauntComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
