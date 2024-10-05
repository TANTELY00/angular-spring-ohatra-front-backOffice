import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommandeServiceService } from '../service-backend/commande-service.service';
import { Commande, PaymentType } from '../models/models';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceLivraisonService } from '../service-backend/service-livraison.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrl: './livraison.component.css'
})
export class LivraisonComponent implements OnInit{
  public livraison : any ;
  public dataSources : any;
  public displayedColumns : string[] = ["id","photos","dateLivraison","dateCommande",
                                        "qteCommander","code","designation","nomCategorie",
                                        "nom","prenoms","adresse","region","telephone",
                                        "nom","telephone_liv","disponibilite","livrer"];

 
  @ViewChild(MatPaginator)  paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private livraisonService : ServiceLivraisonService ){

  }
  ngOnInit(): void {
      this.livraisonService.getAllLivraison()
      .subscribe({
        next : data=>{
          this.livraison = data;
          this.dataSources = new MatTableDataSource(this.livraison);
          this.dataSources.paginator = this.paginator;
          this.dataSources.sort = this.sort;
        },
        error :err =>{
          console.log(err);
        } 
      })
  }
}
