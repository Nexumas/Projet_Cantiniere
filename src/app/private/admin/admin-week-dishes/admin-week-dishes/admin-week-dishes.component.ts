import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../core/services/API/api.service";
import {MealService} from "../../../../core/services/meal/meal.service";
import {LtMeal} from "../../../../core/models/meal/meal";

@Component({
  selector: 'app-admin-week-dishes',
  templateUrl: './admin-week-dishes.component.html',
  styleUrls: ['./admin-week-dishes.component.css']
})
export class AdminWeekDishesComponent implements OnInit {

  constructor(private meal: MealService) { }

  Meal: LtMeal[] = [];

  async ngOnInit(): Promise<void> {
    await this.meal.getAllMealsForThisWeek().then(value => {
      value.subscribe(index => {

        this.Meal = index;
      })
    });
  }

  getMeals(): LtMeal[] {

    return this.Meal;

  }

}
