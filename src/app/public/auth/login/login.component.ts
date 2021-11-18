import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/core/services/authentification/auth.service';
import {UsersService} from '../../../core/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

signup(): void {
    this.router.navigateByUrl('public/auth/signup');
  }

forgotpassword(): void {
    this.router.navigateByUrl('public/auth/forgot-password');
  }

  onSubmit(f: FormGroupDirective): void {
    this.authService.login(f.value.email, f.value.password);
    if (this.authService.isConnected()){
      this.router.navigate(['/']);
    }else{
    }
  }
}
