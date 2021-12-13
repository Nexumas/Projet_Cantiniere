import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/authentification/auth.service';
import {AlertService} from '../../services/alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class OnAdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private notif: AlertService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.authService.isAdmin().subscribe((status ) => {
      if(!status){
        this.router.navigate(['/public']);
        this.notif.onWarning("Accès refusé !");
      }
    });



    return this.authService.isAdmin();
  }

}
