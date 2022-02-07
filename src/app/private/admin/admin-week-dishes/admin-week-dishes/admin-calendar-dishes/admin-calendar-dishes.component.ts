import {Component, Input, OnInit} from '@angular/core';
import {LtMeal} from "../../../../../core/models/meal/meal";

@Component({
  selector: 'app-admin-calendar-dishes',
  templateUrl: './admin-calendar-dishes.component.html',
  styleUrls: ['./admin-calendar-dishes.component.css']
})
export class AdminCalendarDishesComponent implements OnInit {

  @Input()
  days: string;

  @Input()
  MealsWeeks: LtMeal[];

  constructor() { }

  ngOnInit(): void {
  }

}
