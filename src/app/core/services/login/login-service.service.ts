import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Ltuser} from '../../models/User/ltuser';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/lunchtime/login';
  }

  public login(email, password): Subscription {
    const body = { email, password };
    return this.http.request<Ltuser>('POST', this.url, {body, responseType: 'json', observe: 'response'}).subscribe((data: any) => {
    }, error => {
       return error.error.error;
    });
  }

}
