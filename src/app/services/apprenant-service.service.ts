import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApprenantServiceService {
  host = environment.host
  constructor( private http:HttpClient) { }

  public listApprenant(){
    return this.http.get(this.host+"ListeApprenants")
  }
}
