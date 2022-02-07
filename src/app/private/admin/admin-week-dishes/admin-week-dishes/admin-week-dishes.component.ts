import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../core/services/API/api.service";
import {MealService} from "../../../../core/services/meal/meal.service";

@Component({
  selector: 'app-admin-week-dishes',
  templateUrl: './admin-week-dishes.component.html',
  styleUrls: ['./admin-week-dishes.component.css']
})
export class AdminWeekDishesComponent implements OnInit {

  constructor(private api: ApiService, private meal: MealService) { }

  ngOnInit(): void {
  }

  getMeals(){
    return this.meal.getMealsForWeek();
  }

}
