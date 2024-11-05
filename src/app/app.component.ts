import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TopDishesComponent } from "./components/sections/top-dishes/top-dishes.component";
import { TopRestaurantsComponent } from "./components/sections/top-restaurants/top-restaurants.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TopDishesComponent, TopRestaurantsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggy-clone';
}
