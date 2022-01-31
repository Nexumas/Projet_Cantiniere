import { Injectable } from '@angular/core';
import {ApiService} from '../API/api.service';
import {LtConstraint} from '../../models/constraint/constraint';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstraintService {

  constraint$ = new BehaviorSubject<LtConstraint>(null);

  constructor(private apiService: ApiService) { }

  async getConstraint(): Promise<BehaviorSubject<LtConstraint>> {
    this.apiService.findAllConstraint().subscribe(value => {
      this.constraint$.next(this.addConstraint(value));
    });
    await new Promise<void>(done => setTimeout(() => done(), 1000));
    return this.constraint$;
  }

  updateConstraint(id: number, orderTimeLimit: string, maximumOrderPerDay: number){
    this.apiService.updateConstraint(id, orderTimeLimit, maximumOrderPerDay);
  }

  addConstraint(data): LtConstraint {
    let constraint;
    data.filter(index => {
      let orderTimeLimit = index['orderTimeLimit'].substr(0, 5);
      constraint = {
        id: index['id'],
        orderTimeLimit: orderTimeLimit,
        maxPayOrder: index['maximumOrderPerDay']
      };
    });

    return constraint;
  }

}
