import { Injectable } from '@angular/core';
import {ApiService} from '../API/api.service';
import {LtMeal} from '../../models/Meal/meal';

@Injectable({
  providedIn: 'root'
})
export class CardDishesService {

  private dataResult: [];
  private meal: LtMeal;

  constructor(private apiService: ApiService) { }

  //
  mealsForThisWeek(): void {
    this.apiService.mealsForThisWeek().subscribe((data: any) => {
      this.dataListMeals(data.body);
    });
  }

  dataListMeals(data: []) {
    data.forEach((item: string) => {
      this.meal.category = item['category'];
      console.log(item['category']);
    });
  }

}
