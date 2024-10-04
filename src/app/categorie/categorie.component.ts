import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { CategorieServiceService } from '../service-backend/categorie-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent implements OnInit{

  public cathegorie : any ;
  public dataSources : any;
  public displayedColumns : String[] = ["id","image","nomCategorie","description","actions"];
  @ViewChild(MatPaginator)  paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private categorieService : CategorieServiceService){

  }

  ngOnInit(): void {
      this.categorieService.getAllCategorie()
      .subscribe({
        next : data=>{
            this.cathegorie = data;
            this.dataSources = new MatTableDataSource(this.cathegorie);
            this.dataSources.paginator = this.paginator;
            this.dataSources.sort = this.sort;
            
        },
        error:err =>{
          console.log(err);
        } 
      })
  }

}
