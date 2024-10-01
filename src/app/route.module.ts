import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ContactComponent } from "./contact/contact.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { AboutComponent } from "./about/about.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { authGuard } from "./route.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "cart", component: CartComponent },
  { path: "home", component: HomeComponent, canActivate: [authGuard] },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "contact", component: ContactComponent },
  { path: "productdetail/:id", component: ProductDetailComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "about", component: AboutComponent },
  { path: "checkout", component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RouteModule {}
