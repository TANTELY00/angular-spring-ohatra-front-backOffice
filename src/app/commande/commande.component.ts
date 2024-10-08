import { Component, OnInit, ViewChild } from '@angular/core';
import { CommandeServiceService } from '../service-backend/commande-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PaymentType } from '../models/models';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent implements OnInit{

  public commande : any ;
  public dataSources : any;
  public displayedColumns : string[] = ["id","dateCommande","codeProduit","telephoneClient","nomClient",
                                        "adresseClient","regionClient","typePayment",
                                        "qteCommander","actions"];
  public paymentType : string[] = [];

  @ViewChild(MatPaginator)  paginator! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private commandeService : CommandeServiceService){

  }
  ngOnInit(): void {
    for(let element in PaymentType){
      // afficher que l'items mais pas les valeurs aussi' 
      let value = PaymentType[element];
      if(typeof value === 'string'){
        this.paymentType.push(value);
      }
    }  

      this.commandeService.getAllCommands()
      .subscribe({
        next : data=>{
          this.commande = data;
          this.dataSources = new MatTableDataSource(this.commande);
          this.dataSources.paginator = this.paginator;
          this.dataSources.sort = this.sort;
        },
        error :err =>{
          console.log(err);
        } 
      })
  }
}
