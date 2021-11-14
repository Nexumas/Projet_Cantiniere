import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

navbarfixed = false;

  @HostListener('window:scroll', [ '$event']) onscroll(){
    this.navbarfixed = window.scrollY > 100;
  }

  ngOnInit(): void{
     this.onscroll();
  }

}
