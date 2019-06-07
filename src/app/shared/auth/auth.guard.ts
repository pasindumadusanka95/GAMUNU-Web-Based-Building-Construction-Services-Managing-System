import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
// import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from '../user.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{

  constructor(
	  private userService: AuthService,
	  private router: Router,
  ){}

//   canActivate(
// 	  next: ActivatedRouteSnapshot,
// 	  state: RouterStateSnapshot): boolean {
// 		  if (!this.userService.isLoggedIn()) {
// 			  this.router.navigateByUrl('/login');
// 			  this.userService.deleteToken();
// 			  return false;
// 		  }
// 		  return true;
// 	  }
canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('token')) {
		  return true;
	}else{
        this.router.navigateByUrl('/login');
        this.userService.deleteToken();
        return false;
	  }
  }
}
