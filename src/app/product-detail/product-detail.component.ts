import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../Services/product.service";
import { CartService } from "../Services/cart.service";
import { WishlistService } from "../Services/wishlist.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  isInWishlist: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const productId = this.route.snapshot.paramMap.get("id");
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;

      this.isInWishlist = this.wishlistService
        .getWishlist()
        .some((item) => item.id === product.id);
    });
  }

  onSizeClick(event: Event): void {
    const clickedButton = event.target as HTMLElement;
    const buttons = document.querySelectorAll(".btn_sizes");
    buttons.forEach((button) => button.classList.remove("active"));
    clickedButton.classList.add("active");
  }

  addToCart() {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      image: this.product.image,
      price: this.product.price,
      quantity: 1,
    });
    Swal.fire({
      title: "Success!",
      text: "Product added to cart successfully.",
      icon: "success",
      confirmButtonText: "Okay",
    });
  }

  addToWishlist() {
    this.wishlistService.addToWishlist({
      id: this.product.id,
      name: this.product.name,
      image: this.product.image,
      price: this.product.price,
      discount: this.product.discount,
    });
    this.isInWishlist = true;
    Swal.fire({
      title: "Added!",
      text: "Product added to wishlist successfully.",
      icon: "success",
      confirmButtonText: "Okay",
    });
  }

  removeFromWishlist() {
    this.wishlistService.removeFromWishlist(this.product.id);
    this.isInWishlist = false;
    Swal.fire({
      title: "Removed!",
      text: "Product removed from wishlist successfully.",
      icon: "info",
      confirmButtonText: "Okay",
    });
  }
}
