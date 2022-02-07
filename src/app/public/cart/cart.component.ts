import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/core/models/cart/cart';
import { DayDishesService } from 'src/app/core/services/dayDishes/day-dishes.service';
import {MealsforweekService} from "../../core/services/mealsforweek/mealsforweek.service";
import {ConstraintService} from "../../core/services/constraint/constraint.service";
import {LtConstraint} from "../../core/models/constraint/constraint";
import {AuthService} from "../../core/services/authentification/auth.service";
import { ApiService } from 'src/app/core/services/API/api.service';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() public value: number;
  qte: number = 1;


  constructor(public dish: DayDishesService,private mealService: MealsforweekService, private auth: AuthService, private api: ApiService, private notif: AlertService, private router: Router) { }

  async ngOnInit(): Promise<void> {

    this.value = 1;
    if (!sessionStorage.getItem('cart')) {
      sessionStorage.setItem('cart', JSON.stringify([]));
    } else if (this.dish.cart.length <= 0) {
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

  commander(item: Cart) {

    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if(time <= "10:30:00"){

      this.auth.isConnected().subscribe((status) => {
        if(!status){
          this.router.navigate(['/public/auth']);
          this.notif.onWarning("Vous n'êtes pas connecté !");
        }else{
          this.api.addOrder(sessionStorage.getItem('user_id'), item.qte, item.type);
        }
      });

    }

  }
}
