import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WishlistService {
  private wishlist: any[] = [];

  constructor() {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      this.wishlist = JSON.parse(savedWishlist);
    }
  }

  addToWishlist(product: any): void {
    const exists = this.wishlist.find((item) => item.id === product.id);
    if (!exists) {
      this.wishlist.push(product);
      this.saveWishlistToLocalStorage();
    }
  }

  getWishlist(): any[] {
    return this.wishlist;
  }

  removeFromWishlist(productId: number): void {
    this.wishlist = this.wishlist.filter((item) => item.id !== productId);
    this.saveWishlistToLocalStorage();
  }

  private saveWishlistToLocalStorage() {
    localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
  }
}
