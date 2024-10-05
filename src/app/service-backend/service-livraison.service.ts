import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livraison } from '../models/models';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceLivraisonService {

  constructor(private http : HttpClient ) { }

  // GET ALL LIVREURS 
  public getAllLivraison():Observable<Array<Livraison>>{
    return this.http.get<Array<Livraison>>(`${environment.backendHost}/livraisons`);
  }
}
