import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';
import {AuthService} from '../../../core/services/authentification/auth.service';
import {NotificationsService} from 'angular2-notifications';
import {AlertService} from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router, private authService: AuthService, private notif: AlertService, private user: UsersService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      sex: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

 login(): void {
    this.router.navigateByUrl('public/auth/login');
  }

  async onSubmit(f: FormGroupDirective): Promise<void> {
    this.submitted = true;
    if(this.signupForm.valid) {
      if (f.value.confirmPassword == f.value.password) {
        await this.authService.register(f.value.email, f.value.password, f.value.lastname, f.value.firstname, f.value.sex);

        await this.authService.isConnected().subscribe(async (status) => {
          if (status) {
            await this.router.navigate(['/']);
            await this.notif.onSuccess('Vous êtes enregistré !');
          }
        })

      }
    }
  }

}
