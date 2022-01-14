import {Injectable} from '@angular/core';
import {Ltuser} from '../../models/User/ltuser';
import jwt_decode from 'jwt-decode';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import { ApiService } from '../API/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: Ltuser;

  constructor(private apiService: ApiService) { }

  add(data){

    this.user = {
      id: data['id'],
      email: data['email'],
      firstname: data['firstname'],
      sex: data['sex'],
      name: data['name'],
      wallet: data['wallet'],
      phone: data['phone'],
      address: data['address'],
      postalCode: data['postalCode'],
      registrationDate: data['registrationDate'],
      isLunchLady: data['isLunchLady'],
      town: data['town'],
      status: data['status'],
      imageId: data['imageId']
    }
  }

  get():Ltuser {
    return this.user;
  }

  findUser(id: number):Ltuser {
    this.apiService.findUser(id).subscribe(user => {
      this.add(user.body);
    })
    return this.get();
  }
}
