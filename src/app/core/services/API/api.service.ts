import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // url par défaut de l'API
  API_URL = 'http://localhost:8080/lunchtime';

  constructor(private http: HttpClient) { }

  // Appel API pour connexion
  login(email: string, password: string): Observable<HttpResponse<object>> {
    try {
      const body = {email, password};
      return this.http.request('POST', this.API_URL + '/login', {body, responseType: 'json', observe: 'response'});
    }catch (e) {
      throw new Error('Echec de la connexion !');
    }
  }

  // Appel API pour inscription
  register(email: string, password: string, username: string, firstName: string, sex: number): Observable<HttpResponse<object>>{
    try{
      const body = { email, password, username, firstName, sex };
      return this.http.request('POST', this.API_URL + '/register', {body, responseType: 'json', observe: 'response'});
    }catch (e){
      throw new Error('Echec de la création du compte !');
    }
  }

  // Appel API pour liste utilisateur
  findAllUser(): Observable<any[]>{
    try{
      return this.http.get<any[]>(this.API_URL + '/user/findall')
        .pipe(
          map((users: any[]) => users)
        );

    }catch (e){
      throw new Error('Echec de la récupération des utilisateurs!');
    }
  }

}
