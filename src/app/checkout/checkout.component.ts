import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCcAmex } from "@fortawesome/free-brands-svg-icons";
import { faCcDiscover } from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent {
  faCcMastercard = faCcMastercard;
  faCcVisa = faCcVisa;
  faCcAmex = faCcAmex;
  faCcDiscover = faCcDiscover;
  checkoutform: FormGroup;

  ngOnInit() {
    window.scrollTo(0, 0);
    this.checkoutform = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      zip: new FormControl(null, Validators.required),
      cardname: new FormControl(null, Validators.required),
      cardnumber: new FormControl(null, Validators.required),
      expmonth: new FormControl(null, Validators.required),
      expyear: new FormControl(null, Validators.required),
      cvv: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    if (this.checkoutform.invalid) {
      console.log("Invalid Form:", this.checkoutform);
      Swal.fire({
        title: "Error!",
        text: "Please fill all the required fields.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }
    console.log("Form Values:", this.checkoutform.value);
    Swal.fire({
      title: "Success!",
      text: "Order placed successfully.",
      icon: "success",
      confirmButtonText: "Okay",
    });
  }
}
