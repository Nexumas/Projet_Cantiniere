import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../../../core/services/API/api.service';
import {Observable, of} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-admin-user-account',
  templateUrl: './admin-user-account.component.html',
  styleUrls: ['./admin-user-account.component.css']
})
export class AdminUserAccountComponent implements OnInit {

  users$: Observable<any[]> = of([]);
  userMatTable = new MatTableDataSource();
  // Ordre des colonnes
  columnsToDisplay = ['name', 'firstname', 'email', 'wallet' , 'seemore'];
  inputName: string = '';

  @ViewChild(MatPaginator, {static: true}) paginatorte: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.users$ = this.apiService.findAllUser();
    this.users$.subscribe(value => this.userMatTable.data = value);
    this.userMatTable.sort = this.sort;
    this.paginatorte._intl.nextPageLabel = 'Page suivante ';
    this.paginatorte._intl.previousPageLabel = 'Page précédente ';
    this.paginatorte._intl.itemsPerPageLabel = 'Utilisateurs par page ';

    this.userMatTable.paginator = this.paginatorte;


  }
  filterName(inputName: string): void{
    this.inputName = inputName;
    this.userMatTable.filter = inputName;
  }




}
