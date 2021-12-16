import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {UsersService} from '../../../core/services/users/users.service';
import {AlertService} from '../../../core/services/alert/alert.service';
import {ApiService} from '../../../core/services/API/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotpasswordform: FormGroup;

  constructor(private router: Router, private notif: AlertService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.forgotpasswordform = new FormGroup({
      email: new FormControl('', Validators.required)
    });
  }

  skip(): void{
    this.router.navigateByUrl('public/auth/login');
  }

  onSubmit(f: FormGroupDirective): void {
      this.apiService.forgotpassword(f.value.email).pipe(
        data.map =>
      )
  }
}
