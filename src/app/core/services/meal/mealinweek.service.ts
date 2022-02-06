import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealinweekService {

  constructor() { }

  Meals: any[] = [];

  getMeals(): any[]{
    return this.Meals;
  }

  addMeals(meal){
    this.Meals.push(meal);
  }


}
