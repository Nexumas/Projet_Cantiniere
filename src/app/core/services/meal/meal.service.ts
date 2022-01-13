import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ApiService} from '../API/api.service';
import {MealCategory} from '../../models/meal/mealCategory';
import {LtMeal} from '../../models/meal/meal';
import jwt_decode from 'jwt-decode';
import {Ltuser} from '../../models/User/ltuser';
import {IngredientService} from '../ingredient/ingredient.service';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  _ltMeal$: BehaviorSubject<LtMeal[]> = new BehaviorSubject(null);
  catList = MealCategory;
  meals: LtMeal[] = [];

  constructor(private apiService: ApiService, private ingredientService: IngredientService) { }

  //récupère tous les repas et le retourne en Observable
  getAllMeals(): BehaviorSubject<any> {

    this.apiService.findAllMealForThisWeek().subscribe(value  => {
      this.addMealToList(value);
      this._ltMeal$.next(this.getMealList());
    })
    return this._ltMeal$;
  }

  //ajouter un ou plusieurs tableaux de LtMeal à une liste
  addMealToList(data){
    let meal: LtMeal;
    data.filter(index => {
      this.ingredientService.addIngredient(index['ingredients']);
      meal = {
        id: index['id'],
        label: index['label'],
        weeks: index['availableForWeeks'],
        category: index['category'],
        ingredients: this.ingredientService.getIngredientList(),
        imageId: index['imageId'],
        price: index['priceDF']
      }
      this.meals.push(meal);
    });
  }

  //récupérer une liste de LtMeal
  getMealList(): LtMeal[] {
    return this.meals;
  }

  //Récupère le nom de la catégorie à partir de son énumération et de la valeur demandé
  getCategoryName(value: string): string{
    switch (value){
      case 'cat1':
        return this.catList.cat1;
      case 'cat2':
        return this.catList.cat2;
      case 'cat3':
        return this.catList.cat3;
      case 'cat5':
        return this.catList.cat5;
      case 'cat7':
        return this.catList.cat7;
      case 'cat9':
        return this.catList.cat9;
      default:
        return null;
    }
  }

}
