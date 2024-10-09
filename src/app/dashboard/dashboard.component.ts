import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../service-backend/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  public produit : any ;
  constructor(private serviceDashboard : DashboardServiceService){

  }

  ngOnInit(): void {
      this.serviceDashboard.getAllProductsByQte()
      .subscribe({
        next:data=>{
          this.produit = data;
        },
        error:err=>{
          console.log(err);
        }
      })
  }

}
