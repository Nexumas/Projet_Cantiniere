import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ltuser } from 'src/app/core/models/User/ltuser';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-user-account-information',
  templateUrl: './user-account-information.component.html',
  styleUrls: ['./user-account-information.component.css']
})
export class UserAccountInformationComponent implements OnInit {

  user : Ltuser;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

}
