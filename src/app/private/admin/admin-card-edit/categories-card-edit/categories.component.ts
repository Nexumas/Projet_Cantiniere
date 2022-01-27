import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {LtMeal} from '../../../../core/models/meal/meal';
import {AlertService} from '../../../../core/services/alert/alert.service';

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

  //Donner le nom de la catégorie
  setName(name: string) {
    this.name = name;
  }

  //Status affichage du contenu de la catégorie
  display() {
    if (this.selected == true) {
      this.selected = false;
    } else {
      this.selected = true;
    }
  }

  //Status sélectionné
  selectedStatus(): boolean{
    return this.selected;
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

  //Récupération et envoi au parent de l'id du meal à supprimer
  getValueToDelete(meal: LtMeal){
    if(confirm("Voulez-vous vraiment supprimer cet élément ? ")) {
      this.delete.emit(meal);
      let temp = this.object$
      temp.splice(this.object$.indexOf(meal), 1);

      this.object$ = temp;

      this.ngOnInit();
    }
  }

  //récupération de l'id du repas à modifier et l'envoi au parent
  getValueToEdit(meal: LtMeal){
    if(confirm("Voulez-vous vraiment éditer cet élément ? ")) {
      this.edit.emit(meal);
    }
  }

}
