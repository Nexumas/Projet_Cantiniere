import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ApiService} from '../API/api.service';
import {MealCategory, MealCategoryValue} from '../../models/meal/mealCategory';
import {LtMeal} from '../../models/meal/meal';
import {IngredientService} from '../ingredient/ingredient.service';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  _ltMeal$: BehaviorSubject<LtMeal[]> = new BehaviorSubject(null);
  catList = MealCategory;
  catListValue = MealCategoryValue;
  meals: LtMeal[] = [];

  constructor(private apiService: ApiService, private ingredientService: IngredientService) { }

  //récupère tous les repas et le retourne en Observable
  async getAllMeals(): Promise<BehaviorSubject<any>> {
    await new Promise<void>(done => setTimeout(() => done(), 500));

    this.apiService.findAllMeal().subscribe(value => {
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
      this.ingredientService.clearList();
    });
  }

  //récupérer une liste de LtMeal
  getMealList(): LtMeal[] {
    return this.meals;
  }

  //récupère la liste des catégories
  getCategoryList(): any[]{
    return [this.catList.cat1, this.catList.cat2, this.catList.cat3, this.catList.cat5, this.catList.cat7, this.catList.cat9];
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

  //récupère la valeur d'une catégorie par rapport à son nom
  getCategoryValue(value: string): number{
    switch (value){
      case 'Accompagnements':
        return this.catListValue.Accompagnements;
      case 'Entrées':
        return this.catListValue.Entrees;
      case 'Plats':
        return this.catListValue.Plats;
      case 'Desserts':
        return this.catListValue.Desserts;
      case 'Potages':
        return this.catListValue.Potages;
      case 'Boissons':
        return this.catListValue.Boissons;
      default:
        return null;
    }
  }

  //supression d'un repas
  deleteMeal(id){
    this.apiService.deleteMeal(id);
  }

  //ajout d'un repas
  addMeal(label: string, price: number, weeks: number[], category: number, ingredients: number[]){
    this.apiService.addMeal(label, price, weeks, category, ingredients);
  }

  //mise à jour d'un repas
  updateMeal(id: number, label: string, price: number, weeks: number[], category: number, ingredients: number[]){
    this.apiService.updateMeal(id, label, price, weeks, category, ingredients);
  }

  //vide la liste de meal
  clearList(){
    this._ltMeal$.next(null);
    this.meals = [];
  }


}
