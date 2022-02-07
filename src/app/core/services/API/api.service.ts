import { Injectable } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {LtMeal} from '../../models/meal/meal';
import {LtIngredient} from '../../models/ingredient/ingredient';
import {LtConstraint} from '../../models/constraint/constraint';

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
      return this.http.request('POST', this.API_URL + '/login',
        {body, responseType: 'json', observe: 'response'});
    }catch (e) {
      console.error('Echec lors de login');
    }
  }

  // Appel API pour inscription
  register(email: string, password: string, username: string, firstName: string, sex: number): Observable<HttpResponse<object>>{
    try{
      const body = { email, password, username, firstName, sex, isLunchLady: false, image: { imagePath: null, image64: null },
        wallet: 0.0, town: null, phone: null, postalCode: null, address: null};
      return this.http.request('PUT', this.API_URL + '/user/register', {body, responseType: 'json', observe: 'response'});
    }catch (e){
      console.error('Echec lors de register');
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
      console.error('Echec lors de findAllUser');
    }
  }

  // Appel API pour cartes
  mealsForThisWeek(): Observable<LtIngredient[]>{
    try{
      return this.http.get<any[]>(this.API_URL + '/meal/findallavailablefortoday')
        .pipe(
          map((ingredients: LtIngredient[]) => ingredients)
        );
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
  }


  // Appel API pour récupérer tous les repas
  findAllMeal(): Observable<any[]>{
    try{
      return this.http.get<any[]>(this.API_URL + '/meal/findall', {headers: this.createAuthorizationHeader()})
        .pipe(
          map((meals: LtMeal[]) => meals)
        );
    }catch (e){
      console.error('Echec lors de findAllMeal');
    }
  }

  // Appel API pour supprimer un repas
  deleteMeal(id: number){
    try{
      return this.http.request('DELETE',this.API_URL + '/meal/delete/' + id, {headers: this.createAuthorizationHeader()})
        .subscribe(index => console.log(index));
    }catch (e){
      console.error('Echec lors de deleteMeal');
    }
  }

  // Appel API pour récupérer tous les ingrédients
  findAllIngredient(){
    try{
      return this.http.get<any[]>(this.API_URL + '/ingredient/findall/', {headers: this.createAuthorizationHeader()})
        .pipe(
          map((ingredients: LtIngredient[]) => ingredients)
        );
    }catch (e){
      console.error('Echec lors de findAllIngredient');
    }
  }

  // Appel API pour ajouter un repas (meal)
  addMeal(label: string, priceDF: number, availableForWeeks: number[], category: number, ingredientsId: number[]){
    try{
      const body = { label, priceDF, availableForWeeks, category, ingredientsId}
      return this.http.request('PUT',this.API_URL + '/meal/add', {headers: this.createAuthorizationHeader(), body, responseType: 'json'})
        .subscribe(index => console.log(index));
    }catch (e){
      console.error('Echec lors de addMeal');
    }
  }

  //Appel API pour mettre à jour un repas
  updateMeal(id: number, label: string, priceDF: number, availableForWeeks: number[], category: number, ingredientsId: number[]){
    try{
      const body = { label, priceDF, availableForWeeks, category, ingredientsId}
      return this.http.request('PATCH',this.API_URL + '/meal/update/' + id, {headers: this.createAuthorizationHeader(), body, responseType: 'json'}).subscribe(
        index => console.log(index)
      );
    }catch (e){
      console.error('Echec lors de updateMeal');
    }
  }

  //appel API pour récupérer toutes les contraintes
  findAllConstraint(){
    try{
      return this.http.request('GET',this.API_URL + '/constraint/findall/', {headers: this.createAuthorizationHeader(), responseType: 'json'})
        .pipe(
          map((ingredients: LtConstraint[]) => ingredients)
        );
    }catch (e){
      console.error('Échec lors de findAllConstraint');
    }
  }

  //appel API pour mettre à jour une contrainte
  updateConstraint(id: number, orderTimeLimit: string, maximumOrderPerDay: number){
    try{
      const body = { orderTimeLimit, maximumOrderPerDay, rateVAT: 20 }
      return this.http.request('PATCH',this.API_URL + '/constraint/update/' + id, {headers: this.createAuthorizationHeader(), body, responseType: 'json'}).subscribe(
        index => console.log(index)
      );
    }catch (e){
      console.error('Échec lors de updateConstraint');
    }
  }

}
