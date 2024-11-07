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
