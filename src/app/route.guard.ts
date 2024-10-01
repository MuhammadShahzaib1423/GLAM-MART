import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem("token");

  if (token) {
    return true;
  } else {
    console.log("User is not authenticated. Redirecting to login page.");
    router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
