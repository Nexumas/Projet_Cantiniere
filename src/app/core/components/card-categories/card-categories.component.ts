import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LtMeal} from '../../models/Meal/meal';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.css']
})
export class CardCategoriesComponent implements OnInit {

  @Input('name')
  name: string;
  @Input('obj')
  object$: LtMeal[];
  @Input('cat')
  cat: number

  selected: boolean = false;
  page = 1;
  pageSize = 6;
  collectionSize = new BehaviorSubject<number>(null);

  list: BehaviorSubject<LtMeal[]> = new BehaviorSubject<LtMeal[]>(null);

  constructor() { }

  ngOnInit(): void {

    this.list.next(this.getMealListForCategory(this.cat));

    this.list.subscribe((data) => {
      this.collectionSize.next(data.length);
    });

  }

  ngOnChanges(): void {
    this.setNewList();
  }

  //regénérer la liste à partir du OnChange
  setNewList(){
    this.ngOnInit();
  }

  //Génération de la liste des repas en liens avec une catégorie donné
  getMealListForCategory(number: number): LtMeal[] {

    let temp: LtMeal[] = [];

    this.object$.forEach(index => {
      if (number === index['category']) {
        temp.push(index);
      }
    });

    return temp;
  }


  setName(name: string) {
    this.name = name;
  }

  display() {
    if (this.selected == true) {
      this.selected = false;
    } else {
      this.selected = true;
    }
  }

  selectedStatus(): boolean{
    return this.selected;
  }

}
