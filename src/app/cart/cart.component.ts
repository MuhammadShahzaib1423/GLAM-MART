import { Component, Injectable } from "@angular/core";
import { CartService } from "../Services/cart.service";
import { Router } from "@angular/router";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
@Injectable({
  providedIn: "root",
})
export class CartComponent {
  cartItems: any[] = [];
  totals: any;
  fatrash = faTrash;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.updateTotal();
    });
  }

  oncheckout() {
    this.router.navigate(["/checkout"]);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.cartService.cartItems.next(this.cartItems);
    this.cartService.saveCartToLocalStorage();
    this.updateTotal();
  }

  updateTotal() {
    this.totals = this.cartService.getCartTotals();
  }
}
