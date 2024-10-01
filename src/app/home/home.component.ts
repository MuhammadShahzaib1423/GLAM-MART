import { Component, ElementRef, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../Services/product.service";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  bestSellers: any[] = [];
  fabookReader = faBookReader;
  fashippingFast = faShippingFast;
  faheadphones = faHeadphones;
  categories: any[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = [...this.products];
    });
    this.filteredProducts = [...this.products];

    this.productService.searchQuery$.subscribe((query) => {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    });

    this.productService.getbestSellers().subscribe((products) => {
      this.bestSellers = products;
    });
  }
  filterProducts(category: string) {
    if (category) {
      this.filteredProducts = this.products.filter(
        (product) => product.category === category
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }
  donate() {
    this.router.navigate(["/checkout"]);
  }
  shopNow() {
    const section = this.el.nativeElement.querySelector("#new-arrival");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  viewProduct(product: any): void {
    this.router.navigate([`/productdetail/${product.id}`]);
  }
}
