import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../services/authentification/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogonDeactivateGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  //Route désactivé si on est connecté
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let activate: boolean = false;

    this.authService.isConnected().subscribe((status) => {
      if(status){
        this.router.navigate(['/public/home']);
      }else{
        activate = true;
      }
    });

    return activate;
  }

}
