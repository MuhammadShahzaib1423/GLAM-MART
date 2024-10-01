import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError, tap } from "rxjs/operators";
import { AuthResponse } from "../Model/authresponse";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isloggedIn: boolean = false;
  getToken(): string {
    return localStorage.getItem("token");
  }

  signup(email: string, password: string): Observable<AuthResponse> {
    const data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    return this.http.post<AuthResponse>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCKKa1ZhuSnl6ju_5xaei-rLXIu2rXq4bE",
      data
    );
  }
  login(email: string, password: string): Observable<AuthResponse> {
    const data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    return this.http
      .post<AuthResponse>(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKKa1ZhuSnl6ju_5xaei-rLXIu2rXq4bE",
        data
      )

      .pipe(
        tap((response) => {
          if (response.idToken) {
            localStorage.setItem("token", response.idToken);
            this.isloggedIn = true;
          }
        }),

        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    console.error("Backend returned code", err.status, "body was:", err.error);
    let errorMessage = "Unknown error occurred";

    if (err.error && err.error.response && err.error.response.message) {
      errorMessage = err.error.response.message;
    } else if (err.error && typeof err.error === "string") {
      errorMessage = err.error;
    }
    return throwError(() => new Error(errorMessage));
  }
}
