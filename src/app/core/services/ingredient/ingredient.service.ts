import { Injectable } from '@angular/core';
import { ApiService } from '../API/api.service';
import {LtIngredient} from '../../models/ingredient/ingredient';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ltIngredients$ = new BehaviorSubject<LtIngredient[]>(null);
  ingredients: LtIngredient[] = [];

  constructor(private apiService: ApiService) { }

  findAllIngredient(): BehaviorSubject<LtIngredient[]> {
    this.apiService.findAllIngredient().subscribe((data: any) => {
      this.addIngredient(data);
      this.ltIngredients$.next(this.getIngredientList());
    });

    return this.ltIngredients$;
  }

  addIngredient(data: any[]){
    if(data != null) {
     data.filter(index => {
       let ingredient: LtIngredient = {
         id: index['id'],
         label: index['label']
       };
       this.ingredients.push(ingredient);
     });
    }
  }

  clearList() {
    this.ingredients = [];
  }

  getIngredientList(): LtIngredient[]{
    return this.ingredients;
  }

  getIngredients(): LtIngredient[]{
    return this.ltIngredients$.value;
  }

}
