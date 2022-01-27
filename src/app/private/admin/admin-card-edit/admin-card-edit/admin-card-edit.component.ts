import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {MealService} from '../../../../core/services/meal/meal.service';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {IngredientService} from '../../../../core/services/ingredient/ingredient.service';
import {LtMeal} from '../../../../core/models/meal/meal';
import {LtIngredient} from '../../../../core/models/ingredient/ingredient';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-card-edit',
  templateUrl: './admin-card-edit.component.html',
  styleUrls: ['./admin-card-edit.component.css']
})
export class AdminCardEditComponent implements OnInit {

  meal: LtMeal[] = []; // pour les meals récupérés
  ingredients: LtIngredient[]; // pour les ingrédients récupérés

  weeks: number[] = []; // pour les semaines choisis
  ingredientChoiceList: LtIngredient[] = []; //pour le mat-select
  ingredientListForm = []; //pour le submit

  ingredientsChoice; // value ingrédient choisi pour le mat-select
  dateChoice = new FormControl(); // date choisi

  cardEditForm: FormGroup;

  mealIdEdition: number;
  isEdition: boolean = false;


  constructor(private router: Router, private mealService: MealService, private ingredientService: IngredientService, private notif: AlertService) {}

  async ngOnInit(): Promise<void> {

    this.cardEditForm = new FormGroup({
      label: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });

    await this.ingredientService.findAllIngredient().subscribe(index => {
      this.ingredients = index;
    });

    //On récupère tous les repas
    await this.mealService.getAllMeals().then(value => {
      value.subscribe(index => this.meal = index);
    });

  }

  //récupération du nom de la catégorie demandé
  getCategoryName(value: string): string {
    return this.mealService.getCategoryName(value);
  }

  //On créé une liste de repas en fonction de la catégorie demandé
  getMealList(): LtMeal[] {
    let temp: LtMeal[] = [];
    this.meal.forEach(index => {
      temp.push(index);
    })
    return temp;
  }

  getCategoryList(): any[]{
    return this.mealService.getCategoryList();
  }

  updateMeal(meal){
    if(meal.weeks !== null) {
      this.weeks = meal.weeks;
    }
    this.cardEditForm.controls['label'].setValue(meal.label);
    this.cardEditForm.controls['price'].setValue(meal.price);
    this.cardEditForm.controls['category'].setValue(this.getCategoryName('cat' + meal.category));
    this.mealIdEdition = meal.id
    meal.ingredients.forEach(index => {
      this.ingredientChoiceList.push(index.label);
      this.ingredientListForm.push(index.id);
    });
    this.isEdition = true;
  }

  cancelEdition(){
    if(this.isEdition === true){
      this.isEdition = false;
      this.weeks = [];
      this.ingredientChoiceList = [];
      this.ingredientListForm = [];
      this.cardEditForm.controls['label'].setValue('');
      this.cardEditForm.controls['price'].setValue('');
      this.cardEditForm.controls['category'].setValue('');
    }
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
    });
  }

  addIngredientChoice(){
    if(this.ingredientChoiceList.length == 0 || this.ingredientsChoice != null){
      let label = this.ingredientsChoice.label;

      if(!this.ingredientChoiceList.includes(label)){
        this.ingredientChoiceList.push(label);
      }

      this.ingredientListForm.push(this.ingredientsChoice.id);

      this.ingredientListForm.forEach(index => console.log(index));
    }
  }

  deleteIngredientChoice(value){
    this.ingredientChoiceList.forEach(index => {
      if(value === index){
        this.ingredientChoiceList.splice(this.ingredientChoiceList.indexOf(value), 1);
        this.ingredientListForm.splice(this.ingredientListForm.indexOf(value.id), 1);
      }
    });
  }

  onSubmit() {

    if (this.cardEditForm.valid && this.weeks.length > 0) {

      if (this.isEdition === false) {
        this.mealService.addMeal(this.cardEditForm.value.label,
          this.cardEditForm.value.price,
          this.weeks,
          this.mealService.getCategoryValue(this.cardEditForm.value.category),
          this.ingredientListForm);

        this.notif.onSuccess('Repas créé !')
        this.mealService.clearList();
        this.mealService.getAllMeals().then(value => {
          value.subscribe(index => this.meal = index);
        });

      } else {

        this.mealService.updateMeal(this.mealIdEdition,
          this.cardEditForm.value.label,
          this.cardEditForm.value.price,
          this.weeks,
          this.mealService.getCategoryValue(this.cardEditForm.value.category),
          this.ingredientListForm);
        this.notif.onSuccess('Repas mis à jour !');

        this.mealService.clearList();

        this.mealService.getAllMeals().then(value => {
          value.subscribe(index => this.meal = index);
        });

        this.cancelEdition();

      }
    } else {

      this.notif.onError('Formulaire incorrect !');

    }
  }

  deleteMeal(meal){

    this.mealService.deleteMeal(meal.id);
    this.notif.onSuccess('Elément supprimé !');
    this.mealService.clearList();
    this.mealService.getAllMeals().then(value => {
      value.subscribe(index => this.meal = index);
    });

  }
}
