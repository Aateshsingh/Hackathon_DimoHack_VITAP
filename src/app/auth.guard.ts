import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { redirect } from 'react-router-dom';




@Injectable({
  providedIn:'root'
})



export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router){}
  canActivate(
    route : ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean  | UrlTree> | boolean | UrlTree{
      if(!this.auth.isLoggedIn()){
        this.router.navigate(['/login'], {queryParams:{ redirectUrl: state.url}});
        return false;
      }
      return true;
    }
}
