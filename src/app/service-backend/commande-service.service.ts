import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../models/models';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {

  constructor(private http : HttpClient) { }

  // GET ALL COMMANDS
  public getAllCommands():Observable<Array<Commande>>{
    return this.http.get<Array<Commande>>(`${environment.backendHost}/commands`);
  }
}
