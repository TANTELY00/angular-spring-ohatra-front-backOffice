import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private route : HttpClient) { }

  // GET ALL PRODUCTS BY QTE
  public getAllProductsByQte() : Observable<Array<Produit>>{
    return this.route.get<Array<Produit>>(`${environment.backendHost}/produitQTE`);
  }
}
