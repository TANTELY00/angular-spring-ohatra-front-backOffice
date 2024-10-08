import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/models';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitService {

  constructor(private http : HttpClient ) { }

  // GET ALL PRODUIT
  public getAllProduct():Observable<Array<Produit>>{
    return this.http.get<Array<Produit>>(`${environment.backendHost}/produit`);
  }

  
}
