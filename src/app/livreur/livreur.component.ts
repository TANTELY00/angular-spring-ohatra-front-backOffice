import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceLivreurService } from '../service-backend/service-livreur.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrl: './livreur.component.css'
})
export class LivreurComponent implements OnInit{

  public livreur : any ;
  public dataSources : any ;
  public displayedColumns : string[] = ["id","nom","prenoms","adresse","telephone","photos","email","disponibilite"]
  @ViewChild(MatPaginator)  paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private livreurService : ServiceLivreurService){

  }

  ngOnInit(): void {
    this.livreurService.getAllLivreur()
    .subscribe({
      next : data =>{
        this.livreur = data;
        this.dataSources = new MatTableDataSource(this.livreur);
        this.dataSources.paginator = this.paginator;
        this.dataSources.sort = this.sort;
      },
      error : err => {
        console.log(err);
      }
    })
      
  }

}
