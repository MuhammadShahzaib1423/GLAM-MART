import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../Services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupreactiveForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.signupreactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onsubmit() {
    if (this.signupreactiveForm.invalid) {
      console.log("Invalid Form:", this.signupreactiveForm);
      return;
    }

    const { email, password } = this.signupreactiveForm.value;
    console.log("Form Values:", this.signupreactiveForm.value);

    this.authService.signup(email, password).subscribe({
      next: (response) => {
        console.log("Response:", response);
        this.router.navigate(["/login"]);
      },
      error: (error) => {
        console.log("Error:", error);
      },
    });
  }
}
