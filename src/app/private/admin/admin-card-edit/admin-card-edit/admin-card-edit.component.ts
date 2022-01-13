import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MealService} from '../../../../core/services/meal/meal.service';
import {FormControl, NgForm} from '@angular/forms';
import {IngredientService} from '../../../../core/services/ingredient/ingredient.service';
import {LtMeal} from '../../../../core/models/meal/meal';
import {LtIngredient} from '../../../../core/models/ingredient/ingredient';

@Component({
  selector: 'app-admin-card-edit',
  templateUrl: './admin-card-edit.component.html',
  styleUrls: ['./admin-card-edit.component.css']
})
export class AdminCardEditComponent implements OnInit {

  meal: LtMeal[];
  ingredients: LtIngredient[];
  weeks: any[] = [];
  ingredientChoiceList: LtIngredient[] = [];
  dateChoice = new FormControl();
  ingredientsChoice;

  constructor(private mealService: MealService, private ingredientService: IngredientService) {}

  ngOnInit(): void {

    //On récupère tous les repas
    this.mealService.getAllMeals().subscribe(value => {
      this.meal = value;
    });

    //On récupère tous les ingredients
    this.ingredients = this.ingredientService.findAllIngredient();
    this.ingredients.filter(index => console.log(index));
  }

  //récupération du nom de la catégorie demandé
  getCategoryName(value: string): string {
    return this.mealService.getCategoryName(value);
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

  getWeekNumber(d) {
    let date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    let dayNum = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dayNum);
    let yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
    // @ts-ignore
    return Math.ceil((((date - yearStart) / 86400000) + 1)/7)
  }

  weekSelected() {
    if(this.weeks.length == 0 || this.dateChoice.value != null) {
      let d = new Date();
      d.setFullYear(this.dateChoice.value.getYear(), this.dateChoice.value.getMonth(), this.dateChoice.value.getDate());

      if(!this.weeks.includes(this.getWeekNumber(d))){
        this.weeks.push(this.getWeekNumber(d));
      }
    }
  }

  deleteWeek(value){
    this.weeks.forEach(index => {
       if(value == index){
         this.weeks.splice(this.weeks.indexOf(value),1)
       }
    })
  }

  addIngredientChoice(){
    if(this.ingredientChoiceList.length == 0 || this.ingredientsChoice.value != null){
      let label;
      this.ingredientsChoice.value.filter(index => label = index.label);
      console.log(label);
      if(!this.ingredientChoiceList.includes(label)){
        this.ingredientChoiceList.push(label);
      }
    }
  }

  deleteIngredientChoice(value){
    this.ingredientChoiceList.forEach(index => {
      if(value === index){
        this.ingredientChoiceList.splice(this.ingredientChoiceList.indexOf(value), 1);
      }
    })
  }

}
