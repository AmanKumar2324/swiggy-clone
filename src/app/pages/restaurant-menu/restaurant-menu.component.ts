import { Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'
import { HeaderComponent } from "../../components/header/header.component";
import { filter } from 'rxjs';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './restaurant-menu.component.html',
  styleUrl: './restaurant-menu.component.css'
})
export class RestaurantMenuComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    // Listen for route changes and scroll to top on NavigationEnd
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

}
