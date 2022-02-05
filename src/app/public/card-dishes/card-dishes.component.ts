import { Component, OnInit } from '@angular/core';
import {CardDishesService} from '../../core/services/card-dishes/card-dishes.service';
import {LtMeal} from '../../core/models/Meal/meal';
import {MealService} from '../../core/services/meal/meal.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-card-dishes',
  templateUrl: './card-dishes.component.html',
  styleUrls: ['./card-dishes.component.css']
})
export class CardDishesComponent implements OnInit {

  meal: LtMeal[] = [];

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.mealService.getAllMealsForThisWeek().subscribe(value => this.meal = value);
  }

  //On créé une liste de repas en fonction de la catégorie demandé
  getMealListForCategory(number: number): Observable<LtMeal[]> {

    let list$: BehaviorSubject<LtMeal[]> = new BehaviorSubject(null);
    let temp: LtMeal[] = [];

    this.meal.forEach(index => {
      if (number === index['category']) {
        temp.push(index);
      }
    });

    list$.next(temp);
    return list$.asObservable();
  }

  //récupération du nom de la catégorie demandé
  getCategoryName(value: string): string {
    return this.mealService.getCategoryName(value);
  }

}
