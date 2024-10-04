import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientServiceService } from '../service-backend/client-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  public client : any ;
  public dataSources : any ;
  public displayedColumns : string[] = ["id","photos","nom","prenoms","adresse","email","region","telephone","actions"]; 
  @ViewChild(MatPaginator)  paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private clientService : ClientServiceService){

  }

  ngOnInit(): void {
      this.clientService.getAllClients()
      .subscribe({
        next : data=> {
          this.client = data;
          this.dataSources = new MatTableDataSource(this.client);
          this.dataSources.paginator = this.paginator;
          this.dataSources.sort = this.sort;
        },
        error : err=>{
          console.log(err);
        } 
      })
  }

}
