import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports:[CommonModule, RouterLink],
  standalone: true
})
export class HeaderComponent implements OnInit {
  selectedAddress: string = 'Other';

  selectAddress(address: string, event: MouseEvent): void {
    event.preventDefault();
    this.selectedAddress = address;
  }
  cartItems: any[] = [];
  isCartDropdownVisible: boolean = false;
  totalAmount: number = 0;
  subtotalText: string = '';
  
  restaurantName: string = 'Restaurant Name';
  restaurantAddress: string = 'Restaurant Address';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.updateTotalAmount();
    });
  }


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
  }
}
