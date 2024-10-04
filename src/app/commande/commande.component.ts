import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent implements OnInit{

  public commande : any ;
  public paymentType : string[] = [] ; 
  public dataSources : any ;
  public displayedColumns : string[] = ["photos","dateCommande","qteCommander","codeProduit","nomClient","prenoms","adresseClient","telephoneClient","email","regionClient","typePayment","photosPayement"] ;

  constructor(){

  }

  ngOnInit(): void {
      
  }

}
