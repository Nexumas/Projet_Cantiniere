import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

//component "wrap" onclick

@Component({
  selector: 'app-expansion-bar',
  templateUrl: './expansion-bar.component.html',
  styleUrls: ['./expansion-bar.component.css']
})
export class ExpansionBarComponent implements OnInit {
  active: boolean = false;

  //input with title
  @Input() title: string = "title";

  constructor() { }
// test in console for see if the expansion bar as create
  ngOnInit(): void {
    console.log("expansion bar create")
  }



}
