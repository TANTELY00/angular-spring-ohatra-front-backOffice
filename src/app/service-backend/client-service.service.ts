import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/models';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http : HttpClient) { }

  // GET CLIENTS 
  public getAllClients() : Observable<Array<Client>>{
    return this.http.get<Array<Client>>(`${environment.backendHost}/clients`);
  }
}
