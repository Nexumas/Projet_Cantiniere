import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/API/api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-calendar-dishes',
  templateUrl: './admin-calendar-dishes.component.html',
  styleUrls: ['./admin-calendar-dishes.component.css']
})
export class AdminCalendarDishesComponent implements OnInit {

  @Input()
  days: string;

  @Input()
  MealsWeeks: any[];

  choice: any;

  object: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

  }

  addMealsForWeek(Form: NgForm){
    if (Form.valid) {

      this.object.push(Form.value);

      console.table(Form.value.browser);
      /*switch (Form.value.plat_Lundi) {

      }*/

    }
  }

}
