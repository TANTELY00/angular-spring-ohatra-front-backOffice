import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceProduitService } from '../service-backend/service-produit.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { CategorieServiceService } from '../service-backend/categorie-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{

  public produit : any ;
  public dataSources : any ;
  public displayedColumns : string[] = ["code","photos","nomCategorie","type",
                                        "designation","couleur",
                                        "pointure","prix","quantite","actions"]; 
  @ViewChild(MatPaginator)  paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  public  cathegorieList:  any;

  constructor(private serviceCategorie : CategorieServiceService, private produitService : ServiceProduitService){

  }

  ngOnInit(): void {
    this.produitService.getAllProduct()
    .subscribe({
      next : data=>{
        this.produit = data;
        this.dataSources = new MatTableDataSource(this.produit);
        this.dataSources.paginator = this.paginator;
        this.dataSources.sort = this.sort;
      },
      error:err=>{
        console.log(err);
      }
    })
   
    this.serviceCategorie.getAllCategorie()
    .subscribe({
      next : data=>{
        this.cathegorieList = data;
      },
      error:err=>{
        console.log(err);
      }
    })

 }
 
}
