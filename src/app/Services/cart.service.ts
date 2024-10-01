import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  public cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() {
    this.loadCartFromLocalStorage();
  }

  addToCart(product: CartItem) {
    const items = this.cartItems.value;
    const existingProductIndex = items.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex > -1) {
      items[existingProductIndex].quantity += product.quantity;
    } else {
      items.push(product);
    }

    this.updateCart(items);
  }

  getCartItems() {
    return this.cartItems.asObservable();
  }

  getCartTotals() {
    const items = this.cartItems.value;
    const subtotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.05;
    const shipping = 150.0;
    const total = subtotal + tax + shipping;
    return { subtotal, tax, shipping, total };
  }

  private updateCart(items: CartItem[]) {
    this.cartItems.next(items);
    this.saveCartToLocalStorage();
  }

  private loadCartFromLocalStorage() {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      this.cartItems.next(JSON.parse(savedCartItems));
    }
  }

  public saveCartToLocalStorage() {
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems.value));
  }

  getCartItemsLength() {
    return this.cartItems.value.length;
  }
}
