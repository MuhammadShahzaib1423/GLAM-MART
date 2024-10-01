import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../Services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginreactiveForm: FormGroup;
  loginError: string = ""; // To display login errors

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Initialize the login form with email and password fields
    this.loginreactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  onsubmitlogin() {
    if (this.loginreactiveForm.invalid) {
      console.log("Invalid Form:", this.loginreactiveForm);
      return;
    }

    const email = this.loginreactiveForm.value.email;
    const password = this.loginreactiveForm.value.password;
    console.log("Form Values:", this.loginreactiveForm.value);

    this.authService.login(email, password).subscribe({
      next: (response) => {
        console.log("Response:", response);

        localStorage.setItem("token", response.idToken);
        this.router.navigate(["/home"]);
      },
      error: (error) => {
        console.log("Error:", error);

        this.loginError = "Login failed. Please check your credentials.";
      },
    });
  }
}
