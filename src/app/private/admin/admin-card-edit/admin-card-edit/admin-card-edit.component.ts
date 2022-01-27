import {Component, Inject, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {MealService} from '../../../../core/services/meal/meal.service';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {IngredientService} from '../../../../core/services/ingredient/ingredient.service';
import {LtMeal} from '../../../../core/models/meal/meal';
import {LtIngredient} from '../../../../core/models/ingredient/ingredient';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import {Router} from '@angular/router';
import {WeekTool} from '../../../../core/tools/weekTool';

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

  mealIdEdition: number; //id du meal à modifier
  isEdition: boolean = false; //status mode modification


  constructor(private router: Router, private mealService: MealService, private ingredientService: IngredientService,
              private notif: AlertService, private weekTool: WeekTool) {}



  async ngOnInit(): Promise<void> {

    //initialisation du formulaire
    this.cardEditForm = new FormGroup({
      label: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });

    //On récupère tous les ingrédients
    await this.ingredientService.findAllIngredient().subscribe(index => {
      this.ingredients = index;
    });

    //On récupère tous les repas
    await this.mealService.getAllMeals().then(value => {
      value.subscribe(index => this.meal = index);
    });

  }




  //DEBUT Gestion CRUD

  //envoi du formulaire
  onSubmit() {

    if (this.cardEditForm.valid && this.weeks.length > 0) {

      if (this.isEdition === false) {

        //ajout d'un repas
        this.mealService.addMeal(this.cardEditForm.value.label,
          this.cardEditForm.value.price,
          this.weeks,
          this.mealService.getCategoryValue(this.cardEditForm.value.category),
          this.ingredientListForm);

        this.notif.onSuccess('Repas créé !');

        this.mealService.clearList();

        //mise à jour de la liste des repas actuelle
        this.mealService.getAllMeals().then(value => {
          value.subscribe(index => this.meal = index);
        });

      } else {

        //mise à jour du repas
        this.mealService.updateMeal(this.mealIdEdition,
          this.cardEditForm.value.label,
          this.cardEditForm.value.price,
          this.weeks,
          this.mealService.getCategoryValue(this.cardEditForm.value.category),
          this.ingredientListForm);
        this.notif.onSuccess('Repas mis à jour !');

        this.mealService.clearList();

        //mise à jour de la liste des repas actuelle
        this.mealService.getAllMeals().then(value => {
          value.subscribe(index => this.meal = index);
        });

        //on quitte le mode modification
        this.cancelEdition();

      }
    } else {

      this.notif.onError('Formulaire incorrect !');

    }
  }

  //supprimer un repas
  deleteMeal(meal){

    this.mealService.deleteMeal(meal.id);
    this.notif.onSuccess('Elément supprimé !');
    this.mealService.clearList();
    this.mealService.getAllMeals().then(value => {
      value.subscribe(index => this.meal = index);
    });

  }

  //FIN Gestion CRUD




  //DEBUT Gestion des catégories

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

  //récupération de la liste des catégories
  getCategoryList(): any[]{
    return this.mealService.getCategoryList();
  }

  //FIN Gestion des catégories





  //DEBUT Gestion mode modification

  //passage en mode modification pour le formulaire
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

  //quitter le mode modification
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

  //FIN Gestion mode modification





  //DEBUT Gestion des listes du formulaire

  //ajout d'une semaine choisi dans la liste des semaines du formulaire
  weekSelected() {
    if(this.weeks.length == 0 || this.dateChoice.value != null) {
      let d = new Date();
      d.setFullYear(this.dateChoice.value.getYear(), this.dateChoice.value.getMonth(), this.dateChoice.value.getDate());

      if(!this.weeks.includes(this.weekTool.getWeekNumber(d))){
        this.weeks.push(this.weekTool.getWeekNumber(d));
      }
    }
  }

  //supprimer une semaine choisi de la liste des semaines pour le formulaire
  deleteWeek(value){
    this.weeks.forEach(index => {
      if(value == index){
        this.weeks.splice(this.weeks.indexOf(value),1)
      }
    });
  }

  //ajouter un ingrédient choisi dans la liste des ingrédients du formulaire
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

  //supprimer un ingrédient de la liste des ingrédients choisi dans le formulaire
  deleteIngredientChoice(value){
    this.ingredientChoiceList.forEach(index => {
      if(value === index){
        this.ingredientChoiceList.splice(this.ingredientChoiceList.indexOf(value), 1);
        this.ingredientListForm.splice(this.ingredientListForm.indexOf(value.id), 1);
      }
    });
  }

  //FIN Gestion des listes du formulaire




}
