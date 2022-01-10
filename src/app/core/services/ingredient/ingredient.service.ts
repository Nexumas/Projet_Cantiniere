import { Injectable } from '@angular/core';
import { ApiService } from '../API/api.service';
import {LtIngredient} from '../../models/ingredient/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ingredients: LtIngredient[] = [];

  constructor(private apiService: ApiService) { }

  findAllIngredient(): LtIngredient[] {
    this.apiService.findAllIngredient().subscribe((data: any) => {
      this.addIngredient(data.body);
    });

    return this.getIngredientList();
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

  getIngredientList(): LtIngredient[]{
    return this.ingredients;
  }

}
