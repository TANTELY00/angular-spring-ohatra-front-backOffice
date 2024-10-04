import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cathegorie } from '../models/models';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private http : HttpClient) { }

  // get categories
  public getAllCategorie() : Observable<Array<Cathegorie>>{
    return this.http.get<Array<Cathegorie>>(`${environment.backendHost}/cathegories`);
  }
}
