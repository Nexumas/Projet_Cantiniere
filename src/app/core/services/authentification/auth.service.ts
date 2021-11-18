import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ApiService} from '../API/api.service';
import {Ltuser} from '../../models/User/ltuser';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  user: Ltuser;

  constructor(private apiService: ApiService) {
    const token = localStorage.getItem('token_api');
    this._isLoggedIn$.next(!!token);
  }

  isConnected(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  login(email: string, password: string): void{
    this.apiService.login(email, password).subscribe((data: any) => {
      this._isLoggedIn$.next(true);
      // On stock le token dans le cache du navigateur
      localStorage.setItem('token_api', data.headers.get('Authorization'));

      this.decryptJWT( data.headers.get('Authorization'));
    });
  }

  // Décrypter le token pour récupérer les données utilisateur
  decryptJWT(token: string): void{
    try {
      const data: JSON = jwt_decode(token);

      localStorage.setItem('user_id', data['user']['id']);
    }
    catch (e){
      throw new Error('');
    }
  }

  // Deconnexion de l'utilisateur
  disconnect(): void {
    if (localStorage != null){
      // On vide le cache du navigateur
      localStorage.clear();
      this._isLoggedIn$.next(false);
    }
  }
}
