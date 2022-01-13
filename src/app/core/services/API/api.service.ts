import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {LtMeal} from '../../models/meal/meal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // url par défaut de l'API
  private API_URL = 'http://localhost:8080/lunchtime';

  constructor(private http: HttpClient) { }

  createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type':  'application/json', Authorization: sessionStorage.getItem('token_api')});
  }

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
      const body = { email, password, username, firstName, sex, isLunchLady: false, image: { imagePath: null, image64: null }, wallet: 0.0, town: null, phone: null, postalCode: null, address: null};
      return this.http.request('PUT', this.API_URL + '/user/register', {body, responseType: 'json', observe: 'response'});
    }catch (e){
      throw new Error('Echec de la création du compte !');
    }
  }

  // Appel API pour liste utilisateur
  findAllUser(): Observable<any[]>{
    try{
      return this.http.get<any[]>(this.API_URL + '/user/findall', {headers: this.createAuthorizationHeader()})
        .pipe(
          map((users: any[]) => users)
        );

    }catch (e){
      throw new Error('Echec de la récupération des utilisateurs!');
    }
  }

  // Appel API pour cartes
  mealsForThisWeek(): Observable<HttpResponse<object>>{
    try{
      return this.http.request('GET', this.API_URL + '/meal/findallavailablefortoday', {responseType: 'json', observe: 'response'});
    }catch (e){
      throw new Error('Echec de la recuperation des infos !');
    }
  }

  // Appel API pour MDP oublié
  forgotpassword(email : string): Observable<HttpResponse<object>>{
    try{
      const body = email;
      return this.http.request('POST', this.API_URL + '/forgotpassword', {body, responseType: 'json', observe: 'response'});
    }catch (e){
      throw new Error('Echec de la recuperation de l\'info !');
    }
    //test
  }


  // Appel API pour récupérer tous les repas
  findAllMeal(): Observable<any[]>{
    try{
      return this.http.get<any[]>(this.API_URL + '/meal/findall', {headers: this.createAuthorizationHeader()})
        .pipe(
          map((meals: LtMeal[]) => meals)
        );
    }catch (e){
      throw new Error('Echec de la récupération des repas !');
    }
  }

  // Appel API pour supprimer un repas
  deleteMeal(id: number): Observable<object>{
    try{
      return this.http.request('DELETE',this.API_URL + '/meal/delete/' + id);
    }catch (e){
      throw new Error('Echec de la suppression des repas !');
    }
  }

  // Appel API pour récupérer tous les ingrédients
  findAllIngredient(){
    try{
      return this.http.request('GET',this.API_URL + '/ingredient/findall/', {headers: this.createAuthorizationHeader(), responseType: 'json', observe: 'response'});
    }catch (e){
      throw new Error('Echec de la récupération des ingredients !');
    }
  }

}
