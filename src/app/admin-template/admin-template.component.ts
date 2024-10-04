import { Component, OnInit } from '@angular/core';
import { CategorieServiceService } from '../service-backend/categorie-service.service';
import { Cathegorie } from '../models/models';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent implements OnInit{

  public cathegories : any ;
  constructor(private categorieService : CategorieServiceService){

  }
  ngOnInit(): void {
    this.categorieService.getAllCategorie()
    .subscribe({
      next : data =>{
          this.cathegories = data;
      },
      error:err =>{
        console.log(err);
      } 
    })
      
  }

}
