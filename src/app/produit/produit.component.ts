import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceProduitService } from '../service-backend/service-produit.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent implements OnInit{

  public produit : any ;
  public dataSources : any ;
  public displayedColumns : string[] = ["code","photos","nomCathegorie","designation",
                                        "quantite","prix","type","description","couleur"]; 
  @ViewChild(MatPaginator)  paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
  public cathegorie! : string ;

  constructor(private serviceProduit : ServiceProduitService ,private activateRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    let nomCategorie = this.activateRoute.snapshot.params['nomCategorie'];
    console.log('NomCategorie:', nomCategorie);
 }
 
}
