import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { CuisinesComponent } from "../../components/sections/cuisines/cuisines.component";
import { TopDishesComponent } from "../../components/sections/top-dishes/top-dishes.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, TopDishesComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchQuery: string = '';

  // This method will handle search logic when the search icon is clicked
  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // Add logic to search for restaurants or food items based on the query
    } else {
      console.log('Please enter a search term');
    }
  }

}
