import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/API/api.service';

@Component({
  selector: 'app-admin-week-dishes',
  templateUrl: './admin-week-dishes.component.html',
  styleUrls: ['./admin-week-dishes.component.css']
})
export class AdminWeekDishesComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
