import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/core/services/API/api.service';
@Component({
  selector: 'app-admin-order-summary',
  templateUrl: './admin-order-summary.component.html',
  styleUrls: ['./admin-order-summary.component.css']
})
export class AdminOrderSummaryComponent implements OnInit {

  mealList: Observable<any[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.mealList = this.apiService.mealsForThisWeek2();
    this.mealList.subscribe(resp=>console.log(resp));
  }

}
