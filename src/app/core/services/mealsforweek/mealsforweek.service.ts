import { Injectable } from '@angular/core';
import {LtMeal} from "../../models/meal/meal";
import {count} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MealsforweekService {

  Mealsforweek: any[] = [{
    Lundi: [],
    Mardi: [],
    Mercredi: [],
    Jeudi: [],
    Vendredi: []
  }];

  constructor() { }



  addMealsForWeek(meal: LtMeal, day: string){

    this.Mealsforweek.filter((index) => {



      if (day === 'Lundi'){
        if (index.Lundi.length > 1){
          index.Lundi = [];
          index.Lundi.push(meal);
        }else{
          index.Lundi.push(meal);
        }

      }if (day === 'Mardi'){
        if (index.Mardi.length > 1){
          index.Mardi = [];
          index.Mardi.push(meal);
        }else{
          index.Mardi.push(meal);
        }
      }if (day === 'Mercredi'){
        if (index.Mercredi.length > 1){
          index.Mercredi = [];
          index.Mercredi.push(meal);
        }else{
          index.Mercredi.push(meal);
        }
      }if (day === 'Jeudi'){
        if (index.Jeudi.length > 1){
          index.Jeudi = [];
          index.Jeudi.push(meal);
        }else{
          index.Jeudi.push(meal);
        }
      }if (day === 'Vendredi'){
        if (index.Vendredi.length > 1){
          index.Vendredi = [];
          index.Vendredi.push(meal);
        }else{
          index.Vendredi.push(meal);
        }
      }
    });

  }

  getMealsforweek(){
    return this.Mealsforweek;
  }


}
