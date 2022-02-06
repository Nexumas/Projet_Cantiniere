import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../core/services/API/api.service';
import {MealinweekService} from '../../../../core/services/meal/mealinweek.service';
import {MealforweekService} from '../../../../core/services/mealforweek/mealforweek.service';
let meal = require('../../../../shared/config/calendar-dishes.json');

@Component({
  selector: 'app-admin-week-dishes',
  templateUrl: './admin-week-dishes.component.html',
  styleUrls: ['./admin-week-dishes.component.css']
})
export class AdminWeekDishesComponent implements OnInit {

  constructor(private api: ApiService, private meal: MealinweekService, private mealinweek: MealforweekService) { }

  ngOnInit(): void {

    this.addMeals();

  }

  addMealsForWeek(meals) {

      this.mealinweek.addMealWeek(meals)

  }

  addMeals(){
    this.api.findAllMealInWeek().then((data) => {
      this.meal.addMeals(data);
    });
  }

  getMeals(){
    return this.meal.getMeals();
  }

}
