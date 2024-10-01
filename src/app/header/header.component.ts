// header.component.ts
import { Component, EventEmitter, Output } from "@angular/core";
import { ProductService } from "../Services/product.service";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CartService } from "../Services/cart.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  searchQuery: string = "";
  fasearch = faSearch;
  facart = faShoppingCart;
  cartCount: Number = 0;
  showNavbar: boolean = true;
  isMenuOpen = false;
  constructor(
    private productservice: ProductService,
    private cartservice: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      const hiddenRoutes = ["/login", "/signup"];
      this.showNavbar = !hiddenRoutes.includes(this.router.url);
    });

    this.cartservice.cartItems$.subscribe((items) => {
      this.cartCount = items.length;
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  onSearchChange() {
    this.productservice.updateSearchQuery(this.searchQuery);
  }

  getCartItemsLength() {
    this.cartCount = this.cartservice.getCartItemsLength();
  }
}
