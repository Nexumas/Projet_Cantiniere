import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealforweekService {

  MealWeek: any[] = [];

  constructor() { }

  getMealWeek(){
    return this.MealWeek;
  }

  addMealWeek(meal){
    this.MealWeek.push(meal);
  }

}
