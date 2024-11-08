// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CartService } from '../../services/cart.service';
// // import { HeaderComponent } from './header.component';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent implements OnInit{
//   isCartDropdownVisible: boolean = false;
//   // cartItems: any[] = [
//   //   { name: 'Pizza', price: 499 },
//   //   { name: 'Burger', price: 299 },
//   //   { name: 'Pasta', price: 399 },
//   // ];
//   cartItems: any[] = [];
// dropdownClass: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;
//   constructor(private cartService: CartService) {}
//   ngOnInit(): void {
//     // Subscribe to cart items from CartService
//     this.cartService.cartItems$.subscribe(items => {
//       this.cartItems = items;
//     });
//   }
//   getTotalPrice(): number {
//     return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   }
//   // restaurantName: string = 'Restaurant XYZ';
//   // restaurantAddress: string = '123 Main Street, City';
//   // subtotalText: string = 'Subtotal for 3 items';
//   // totalAmount: number = 1197;

//   toggleCartDropdown(isVisible: boolean): void {
//     this.isCartDropdownVisible = isVisible;
//   }

//   checkout(): void {
//     // Handle checkout logic (e.g., navigate to checkout page)
//     console.log('Proceeding to checkout...');
//   }

// }

import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'; // Make sure CartService is imported
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports:[CommonModule],
  standalone: true
})
export class HeaderComponent implements OnInit {
  selectedAddress: string = 'Other'; // Default value

  selectAddress(address: string, event: MouseEvent): void {
    event.preventDefault(); // Prevent the default anchor tag behavior
    this.selectedAddress = address; // Update the selected address
  }
  cartItems: any[] = []; // Holds the cart items
  isCartDropdownVisible: boolean = false; // Flag for dropdown visibility
  totalAmount: number = 0; // Total amount for the cart
  subtotalText: string = ''; // Subtotal text (could be "Your cart is ready for checkout" or actual text)
  
  restaurantName: string = 'Restaurant Name'; // Example restaurant name
  restaurantAddress: string = 'Restaurant Address'; // Example restaurant address

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to cart items in the cart service
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.updateTotalAmount(); // Update total amount whenever cart items change
    });
  }

  // Toggle the visibility of the cart dropdown
  toggleCartDropdown(isVisible: boolean): void {
    this.isCartDropdownVisible = isVisible;
  }

  // Calculate total amount from cart items
  updateTotalAmount(): void {
    this.totalAmount = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    this.subtotalText = `Total of ${this.cartItems.length} items`; // Example: "Total of 3 items"
  }

  // Checkout method (you can modify this to trigger actual checkout process)
  checkout(): void {
    console.log('Proceeding to checkout...');
    // You can call your checkout logic here (e.g., navigate to checkout page, submit order, etc.)
  }
}
