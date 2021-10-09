import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    document.getElementById('btn-mdpoublie').addEventListener('click',(e)=>{
      e.preventDefault()
      document.getElementById('mdpoublie').style.display="flex";
      document.getElementById('form-login').style.display='none';
    })

  }

}
