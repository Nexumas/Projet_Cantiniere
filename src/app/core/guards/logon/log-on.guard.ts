import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/authentification/auth.service';
import {AlertService} from '../../services/alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class LogOnGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private notif: AlertService){}

  //Route activé si on est connecté
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.authService.isConnected().subscribe((status) => {
      if(!status){
        this.router.navigate(['/public/auth']);
        this.notif.onWarning("Vous n'êtes pas connecté !");
      }
    });

    return this.authService.isConnected();
  }

}
