// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// interface CartItem {
//   name: string;
//   price: number;
//   imageUrl: string;
//   quantity: number;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItems: CartItem[] = [];
//   private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);
//   cart$ = this.cartSubject.asObservable();

//   constructor() {}

//   addToCart(item: CartItem): void {
//     const existingItem = this.cartItems.find(i => i.name === item.name);
//     if (existingItem) {
//       existingItem.quantity++;
//     } else {
//       this.cartItems.push({ ...item, quantity: 1 });
//     }
//     this.cartSubject.next(this.cartItems);
//   }

//   removeFromCart(item: CartItem): void {
//     this.cartItems = this.cartItems.filter(i => i.name !== item.name);
//     this.cartSubject.next(this.cartItems);
//   }

//   getCartItems(): CartItem[] {
//     return this.cartItems;
//   }

//   getCartCount(): number {
//     return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
//   }
// }

// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]); // Store cart items as an observable
  cartItems$ = this.cartItems.asObservable(); // Observable to subscribe to

  constructor() {}

  // Add item to cart
  addToCart(item: any) {
    const currentItems = this.cartItems.value;
    const existingItemIndex = currentItems.findIndex(cartItem => cartItem.name === item.name);
    
    if (existingItemIndex > -1) {
      // If item is already in cart, increase quantity
      currentItems[existingItemIndex].quantity += 1;
    } else {
      // Otherwise, add the item to the cart with quantity 1
      currentItems.push({ ...item, quantity: 1 });
    }

    this.cartItems.next([...currentItems]); // Update cart items
  }

  // Update quantity of an item in the cart
  updateQuantity(item: any, quantity: number) {
    const currentItems = this.cartItems.value;
    const itemIndex = currentItems.findIndex(cartItem => cartItem.name === item.name);

    if (itemIndex > -1 && quantity >= 0) {
      currentItems[itemIndex].quantity = quantity;
      this.cartItems.next([...currentItems]); // Update cart items
    }
  }

  // Remove item from the cart
  removeFromCart(item: any) {
    const currentItems = this.cartItems.value.filter(cartItem => cartItem.name !== item.name);
    this.cartItems.next([...currentItems]); // Update cart items
  }

  // Clear all items from the cart
  clearCart() {
    this.cartItems.next([]); // Empty cart
  }
}
