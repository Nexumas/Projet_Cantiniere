import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ApiService} from '../API/api.service';
import {Ltuser} from '../../models/User/ltuser';
import jwt_decode from 'jwt-decode';
import {delay} from 'rxjs/operators';
import {AlertService} from '../alert/alert.service';
import {Router} from '@angular/router';
import {UsersService} from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private _isAdmin$ = new BehaviorSubject<boolean>(false);

  constructor(private apiService: ApiService, private notif: AlertService, private router: Router, private user: UsersService) {
    const token = sessionStorage.getItem('token_api');
    const lunchlady = sessionStorage.getItem('lunchlady');
    this._isLoggedIn$.next(!!token);
    this._isAdmin$.next(!!lunchlady);
  }

  //Vérification de connexion en asynchrone
  isConnected(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  //Vérification admin en asynchrone
  isAdmin(): Observable<boolean> {
    return this._isAdmin$.asObservable();
  }

 login(email: string, password: string): void{
      this.apiService.login(email, password).subscribe(async (data: any) => {
      this._isLoggedIn$.next(true);
      // On stock le token dans le cache du navigateur
      sessionStorage.setItem('token_api', data.headers.get('Authorization'));

      this.decryptJWT(data.headers.get('Authorization'));
    });
  }

  // Décrypter le token pour récupérer les données utilisateur
  decryptJWT(token: string): void{
    const data: JSON = jwt_decode(token)['user'];

    sessionStorage.setItem('user_id', data['id']);

    if (data != null && data['isLunchLady'] === true){
      sessionStorage.setItem('lunchlady', 'status');
      this._isAdmin$.next(true);
    }
  }

  // Deconnexion de l'utilisateur
  async disconnect(): Promise<void> {
    if (sessionStorage != null) {
      // On vide le cache du navigateur
      sessionStorage.clear();
      this._isLoggedIn$.next(false);
      this._isAdmin$.next(false);
    }
  }

  async register(email: string, password: string, username: string, firstname: string, sex: number): Promise<void> {
    try {
      this.apiService.register(email, password, username, firstname, sex).subscribe();

      await new Promise<void>(done => setTimeout(() => done(), 5000));
      this.login(email, password);
    } catch (e) {
      throw new Error('Erreur inscription');
    }
  }
}
