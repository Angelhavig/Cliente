import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const AuthGuard: CanActivateFn = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService =  inject(AuthService);
  const router = inject(Router);
  
  authService.isLoggedIn || router.navigate(['Login']);

  return true;
  
};