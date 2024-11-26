import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('isloggedIn'); 
    if (isLoggedIn) {
      console.log("no issue");
      return true; 
    } else {
      console.log("issue");
      this.router.navigate(['/login']); 
      return false; 
    }
  }
}
