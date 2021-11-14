import { Component, OnInit } from '@angular/core';
import {Ltuser} from '../../models/User/ltuser';
import {LoginServiceService} from '../../services/login/login-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: Ltuser;
  loginError = null;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {

    document.getElementById('btn-mdpoublie').addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('mdpoublie').style.display = 'flex';
      document.getElementById('form-login').style.display = 'none';
    });

  }

  onSubmit(f: NgForm) {
    console.log(f.value.password);
    try{
      this.loginService.login(f.value.email, f.value.password);
      this.users.getToken;
    }catch (e){
      this.loginError = 'Mauvaises Informations !';
    }


  }
}
