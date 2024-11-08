import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {
  
  dishes = [
    {
      name: 'Korean Pizza',
      price: 225,
      discount: '20% off on this order',
      description: 'Hot and spicy filled with cheese',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/19/4c4e85fc-9a85-41b7-a9d6-644b92c144da_a8391eb4-db4c-41cc-b7d5-02114443fc5c.jpg',
      quantity: 0
    },
    {
      name: 'Indian Tandoori Roll Chicken',
      price: 399,
      discount: '20% off on this order',
      description: 'Save Rs. 75 on Indian Tandoori Roll, Classic Zinger Burger, Medium Fries & Pepsi PET 475ml',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/19/5d439a47-5bce-4010-b1b1-bc2f8344367b_8ed35bd6-33f3-419e-a5ee-62efb83a6a45.jpg',
      quantity: 0
    },
    {
      name: 'Thai Spicy Roll & Zinger Chicken Meal',
      price: 399,
      discount: '20% off on this order',
      description: 'Save Rs. 75 with Thai Spicy Roll with Classic Zinger Burger, Medium Fries, and Pepsi PET 475ml',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/19/5d439a47-5bce-4010-b1b1-bc2f8344367b_8ed35bd6-33f3-419e-a5ee-62efb83a6a45.jpg',
      quantity: 0
    },
    {
      name: 'Classic Chicken Roll Meal',
      price: 479,
      discount: '20% off on this order',
      description: 'Deal combo of 2 Classic Chicken Rolls, Large Fries, 2 Dips & Pepsi 475ml',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/10/183cb04b-d716-443a-91d9-27f26c566adc_e3c2c7c7-b9a8-4881-a4b5-05532b10ec0a.jpg',
      quantity: 0
    },
    {
      name: 'French Fries - Medium',
      price: 99.09,
      discount: '20% off on this order',
      description: 'Medium Size Fries',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/n4ry9mep4uisjri10uqp',
      quantity: 0
    },
    {
      name: 'Pack of 4 dips',
      price: 125,
      discount: '20% off on this order',
      description: 'Adding dips is always a good idea!',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gvtc5ybblsammx3nemfo',
      quantity: 0
    }
  ];

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    // Listen for route changes and scroll to top on NavigationEnd
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  // Add dish to cart (sets quantity to 1 if it's 0)
  addToCart(index: number) {
    const dish = this.dishes[index];
    // Set the quantity to 1 when "ADD" is pressed for the first time
    if (dish.quantity === 0) {
      dish.quantity = 1;
    } else {
      dish.quantity++;  // Increase quantity if the dish is already added
    }
    this.cartService.addToCart(dish);
  }

  // Increase the quantity of a dish
  increaseQuantity(index: number) {
    const dish = this.dishes[index];
    dish.quantity++;
    this.cartService.updateQuantity(dish, dish.quantity); 
  }

  // Decrease the quantity of a dish, with a minimum of 0
  decreaseQuantity(index: number) {
    const dish = this.dishes[index];
    if (dish.quantity > 0) {
      dish.quantity--;
      this.cartService.updateQuantity(dish, dish.quantity); // Update quantity in the cart
    }
  }
}
