import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LtMeal} from "../../../../../core/models/meal/meal";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {MealsforweekService} from "../../../../../core/services/mealsforweek/mealsforweek.service";

@Component({
  selector: 'app-admin-calendar-dishes',
  templateUrl: './admin-calendar-dishes.component.html',
  styleUrls: ['./admin-calendar-dishes.component.css']
})
export class AdminCalendarDishesComponent implements OnInit {

  @Input('days')
  days: string;

  @Input('meal')
  meal: LtMeal[];

  fg: FormGroup;

  @Output() browser_p1 = new EventEmitter<LtMeal>();

  @Output() browser_p2 = new EventEmitter<LtMeal>();

  constructor(private mfw : MealsforweekService) { }

  ngOnInit(): void {

    this.fg = new FormGroup({

      browser_p1: new FormControl('', Validators.required),
      browser_p2: new FormControl('', Validators.required)

    });

  }

  onSubmit() {

    if(this.fg.valid){

      this.meal.filter((item) => {
        if(item.label === this.fg.controls['browser_p1'].value){
          this.mfw.addMealsForWeek(item, this.days);
        }
        if(item.label === this.fg.controls['browser_p2'].value){



          this.mfw.addMealsForWeek(item, this.days);
        }
      });

      console.table(this.mfw.Mealsforweek);
      /*this.fg.controls['browser_p1'].label;*/
    }
  }

}
