import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {Cart} from '../../models/cart/cart';
import {element} from 'protractor';
import {AlertService} from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class DayDishesService {

  private url: string;

  cart: Cart[] = [];


  constructor(private http: HttpClient, private alert: AlertService) {
    this.url = 'http://localhost:8080/lunchtime/login';
  }

  addCart(cart: Cart): void {

    if (!this.cart.some(item => item.jour === cart.jour)) {
      this.cart.push(cart);
      sessionStorage.setItem('cart', JSON.stringify(this.cart))
      this.alert.onInfo('plat ajouter');
    } else {
      this.UpdateCart(cart)
    }

  }

  remove(cart: Cart): void{

    this.cart.forEach(item => {
      if (item === cart){
        this.alert.onInfo('plat supprimer');

        this.cart.splice(this.cart.indexOf(cart),1)

        sessionStorage.setItem('cart', JSON.stringify(this.cart))
      }
    });

  }

  public login(email, password): Subscription {
    const body = { email, password };
    return this.http.request('POST', this.url, {body, responseType: 'json', observe: 'response'}).subscribe((data: any) => {

    }, error => {
      return error.error.error;
    });
  }

  UpdateCart(cart: Cart) {
    this.cart.forEach(item => {
      if (item.jour === cart.jour){
        if (cart != item){
          item.plat = cart.plat;
          item.type = cart.type;
          item.qte = cart.qte;
          this.alert.onInfo('plat modifier');
          sessionStorage.setItem('cart', JSON.stringify(this.cart));
        }
      }
    });
  }
}
