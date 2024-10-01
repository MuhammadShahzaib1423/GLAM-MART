import { Component, OnInit } from "@angular/core";
import { WishlistService } from "../Services/wishlist.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.css"],
})
export class WishlistComponent implements OnInit {
  wishlist: any[] = [];

  constructor(
    private wishlistService: WishlistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.wishlist = this.wishlistService.getWishlist();
  }

  viewProduct(product: any): void {
    this.router.navigate([`/productdetail/${product.id}`]);
  }
}
