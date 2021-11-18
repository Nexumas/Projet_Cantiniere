import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/authentification/auth.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  auth: AuthService = this.authService;

  ngOnInit(): void {
  }

}
