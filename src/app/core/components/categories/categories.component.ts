import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LtMeal} from '../../models/meal/meal';
import {AlertService} from '../../services/alert/alert.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnChanges {

  @Input('name')
  name: string;
  @Input('obj')
  object$: LtMeal[];
  @Input('cat')
  cat: number;

  list: BehaviorSubject<LtMeal[]> = new BehaviorSubject<LtMeal[]>(null);

  @Output() delete = new EventEmitter<LtMeal>();
  @Output() edit = new EventEmitter<LtMeal>();

  selected: boolean = false;
  page = 1;
  pageSize = 6;
  collectionSize = new BehaviorSubject<number>(null);

  constructor() {}

  ngOnChanges(): void {
    this.setNewList();
  }

  setNewList(){
      this.ngOnInit();
  }

  ngOnInit(): void {

    this.list.next(this.getMealListForCategory(this.cat));

    this.list.subscribe((data) => {
      this.collectionSize.next(data.length);
    });

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

  getMealListForCategory(number: number): LtMeal[] {

    let temp: LtMeal[] = [];

    this.object$.forEach(index => {
      if (number === index['category']) {
        temp.push(index);
      }
    });

    return temp;
  }

  getValueToDelete(meal: LtMeal){
    if(confirm("Voulez-vous vraiment supprimer cet élément ? ")) {
      this.delete.emit(meal);
      let temp = this.object$
      temp.splice(this.object$.indexOf(meal), 1);

      this.object$ = temp;

      this.ngOnInit();
    }
  }

  getValueToEdit(meal: LtMeal){
    if(confirm("Voulez-vous vraiment éditer cet élément ? ")) {
      this.edit.emit(meal);
    }
  }

}
