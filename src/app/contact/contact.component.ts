import { Component } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  ngoninit(): void {
    window.scrollTo(0, 0);
  }
}
