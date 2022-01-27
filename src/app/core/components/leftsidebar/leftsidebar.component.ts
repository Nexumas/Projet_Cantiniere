import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/authentification/auth.service';
import {Ltuser} from '../../models/User/ltuser';
import {UsersService} from '../../services/users/users.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UsersService) { }

  auth: AuthService = this.authService;

  ngOnInit() {
  }

}
