import {Injectable} from '@angular/core';
import {Ltuser} from '../../models/User/ltuser';
import jwt_decode from 'jwt-decode';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   user: Ltuser;

  constructor() { }

  add(token: string){
    const data: JSON = jwt_decode(token)['user'];

    this.user = {

      email: data['email'],
      firstName: data['firstname'],
      sex: data['sex'],
      username: data['name'],
      wallet: data['wallet'],
      phone: data['phone'],
      address: data['address'],
      postalCode: data['postalCode']

    }
  }

  get():Ltuser {
    return this.user;
  }
}
