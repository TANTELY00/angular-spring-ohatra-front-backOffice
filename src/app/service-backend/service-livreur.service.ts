import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livreur } from '../models/models';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceLivreurService {

  constructor(private http : HttpClient ) { }

  // GET ALL LIVREURS 
  public getAllLivreur():Observable<Array<Livreur>>{
    return this.http.get<Array<Livreur>>(`${environment.backendHost}/livreurs`);
  }
}
