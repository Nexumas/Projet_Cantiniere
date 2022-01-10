import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LtMeal} from '../../models/meal/meal';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input('name')
  name: string;
  @Input('obj')
  object$: Observable<LtMeal[]>;

  selected: boolean = false;
  page = 1;
  pageSize = 6;
  collectionSize: number;

  constructor() {
  }

  ngOnInit(): void {
    this.object$.subscribe((data) => {
      this.collectionSize = data.length;
    })
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
