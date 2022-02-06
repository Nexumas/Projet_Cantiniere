import {Component, Input, OnInit} from '@angular/core';
import {DayDishesService} from '../../core/services/dayDishes/day-dishes.service';
import {Cart} from '../../core/models/cart/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() public value: number;
  qte: number = 1;

  constructor(public dish: DayDishesService) { }

  ngOnInit(): void {
    this.value = 1;
    if(!sessionStorage.getItem('cart')){
      sessionStorage.setItem('cart', JSON.stringify([]));
    }else if (this.dish.cart.length <= 0) {
      this.dish.cart = JSON.parse(sessionStorage.getItem('cart'));
      this.value = this.dish.cart['0'].qte;
    }

  }

  add(cart: Cart){
    let newCart: Cart = {
      jour: cart.jour,
      plat: cart.plat,
      type: cart.type,
      qte: this.value
    }
    this.dish.UpdateCart(newCart);
  }

}
