import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expansion-bar',
  templateUrl: './expansion-bar.component.html',
  styleUrls: ['./expansion-bar.component.css']
})
export class ExpansionBarComponent implements OnInit {
  active: boolean = false;
  @Input() title: string = "title";

  constructor() { }

  ngOnInit(): void {
    console.log("expansion bar create")
  }



}
