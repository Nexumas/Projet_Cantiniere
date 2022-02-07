import {Component, Input, OnInit} from '@angular/core';
import {AlertService} from "../../../core/services/alert/alert.service";
import {DayDishesService} from "../../../core/services/dayDishes/day-dishes.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-calendar-dishes',
  templateUrl: './calendar-dishes.component.html',
  styleUrls: ['./calendar-dishes.component.css']
})
export class CalendarDishesComponent implements OnInit {

  constructor(private alert: AlertService, private dish: DayDishesService) { }

  @Input() day: string;

  choice: any;

  indays(): number {
    let isdaychoice = 0;
    if (this.day === "Lundi"){
      isdaychoice = 1;
    }else if (this.day === "Mardi"){
      isdaychoice = 2;
    }else if (this.day === "Mercredi"){
      isdaychoice = 3;
    }else if (this.day === "Jeudi"){
      isdaychoice = 4;
    }else if (this.day === "Vendredi"){
      isdaychoice = 5;
    }
    let dayofweek = new Date().getDay();
    if (isdaychoice === dayofweek)
      return dayofweek;
    return 0;
  }

  ngOnInit(): void {
    if(!sessionStorage.getItem('cart')){
      sessionStorage.setItem('cart', JSON.stringify([]));
    }else if (this.dish.cart.length <= 0) {
      this.dish.cart = JSON.parse(sessionStorage.getItem('cart'));
    }
  }

  addCart(Form: NgForm): void {

    // const valeur: boolean = this.authService.isConnected().subscribe((status) => { return status });

    // type = 1 = seul
    // type = 2 = formule

    if (Form.valid) {

      switch (Form.value.plat_Lundi) {

        case 'Plat1_s_Lundi':

          this.dish.addCart({jour: 'Lundi', plat: 'plat1', type: 1, qte: 1});

          break;
        case 'Plat1_f_Lundi':

          this.dish.addCart({jour: 'Lundi', plat: 'plat1', type: 2, qte: 1});

          break;
        case 'Plat2_s_Lundi':

          this.dish.addCart({jour: 'Lundi', plat: 'plat2', type: 1, qte: 1});

          break;
        case 'Plat2_f_Lundi':

          this.dish.addCart({jour: 'Lundi', plat: 'plat2', type: 2, qte: 1});

          break;
      }

      switch (Form.value.plat_Mardi) {
        case 'Plat1_s_Mardi':

          this.dish.addCart({jour: 'Mardi', plat: 'plat1', type: 1, qte: 1});

          break;
        case 'Plat1_f_Mardi':

          this.dish.addCart({jour: 'Mardi', plat: 'plat1', type: 2, qte: 1});

          break;
        case 'Plat2_s_Mardi':

          this.dish.addCart({jour: 'Mardi', plat: 'plat2', type: 1, qte: 1});

          break;
        case 'Plat2_f_Mardi':

          this.dish.addCart({jour: 'Mardi', plat: 'plat2', type: 2, qte: 1});

          break;
      }

      switch (Form.value.plat_Mercredi) {
        case 'Plat1_s_Mercredi':

          this.dish.addCart({jour: 'Mercredi', plat: 'plat1', type: 1, qte: 1});

          break;
        case 'Plat1_f_Mercredi':

          this.dish.addCart({jour: 'Mercredi', plat: 'plat1', type: 2, qte: 1});

          break;
        case 'Plat2_s_Mercredi':

          this.dish.addCart({jour: 'Mercredi', plat: 'plat2', type: 1, qte: 1});

          break;
        case 'Plat2_f_Mercredi':

          this.dish.addCart({jour: 'Mercredi', plat: 'plat2', type: 2, qte: 1});

          break;
      }

      switch (Form.value.plat_Jeudi) {
        case 'Plat1_s_Jeudi':

          this.dish.addCart({jour: 'Jeudi', plat: 'plat1', type: 1, qte: 1});
          break;
        case 'Plat1_f_Jeudi':

          this.dish.addCart({jour: 'Jeudi', plat: 'plat1', type: 2, qte: 1});
          break;
        case 'Plat2_s_Jeudi':

          this.dish.addCart({jour: 'Jeudi', plat: 'plat2', type: 1, qte: 1});
          break;
        case 'Plat2_f_Jeudi':
          this.dish.addCart({jour: 'Jeudi', plat: 'plat2', type: 2, qte: 1});
          break;
      }

      switch (Form.value.plat_Vendredi) {
        case 'Plat1_s_Vendredi':
          this.dish.addCart({jour: 'Vendredi', plat: 'plat1', type: 1, qte: 1});
          break;
        case 'Plat1_f_Vendredi':
          this.dish.addCart({jour: 'Vendredi', plat: 'plat1', type: 2, qte: 1});
          break;
        case 'Plat2_s_Vendredi':
          this.dish.addCart({jour: 'Vendredi', plat: 'plat2', type: 1, qte: 1});
          break;
        case 'Plat2_f_Vendredi':
          this.dish.addCart({jour: 'Vendredi', plat: 'plat2', type: 2, qte: 1});
          break;
      }



    }else{
      this.alert.onError('Veuillez choisir un plat');
    }
  }

  getDish(){
    console.table(this.dish.cart)
  }

}
