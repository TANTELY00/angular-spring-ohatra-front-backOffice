import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit{
  
  public service : any ;
  public dataSources : any ;
  public displayedColumns : string[] = ["id","photos","nom","description","actions"]
  @ViewChild (MatPaginator)  paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(){

  }

  ngOnInit(): void {
      
  }

}
