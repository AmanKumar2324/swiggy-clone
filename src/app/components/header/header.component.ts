import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isCartDropdownVisible: boolean = false;
  cartItems: any[] = [
    { name: 'Pizza', price: 499 },
    { name: 'Burger', price: 299 },
    { name: 'Pasta', price: 399 },
  ];
  restaurantName: string = 'Restaurant XYZ';
  restaurantAddress: string = '123 Main Street, City';
  subtotalText: string = 'Subtotal for 3 items';
  totalAmount: number = 1197;

  toggleCartDropdown(isVisible: boolean): void {
    this.isCartDropdownVisible = isVisible;
  }

  checkout(): void {
    // Handle checkout logic (e.g., navigate to checkout page)
    console.log('Proceeding to checkout...');
  }

}
