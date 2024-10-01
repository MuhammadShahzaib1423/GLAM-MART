import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  ngOnInit() {
    localStorage.removeItem("token");
  }
  constructor(private router: Router) {}
}
