import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  host:String = "http://localhost:8080/apprenantOdk/";
  constructor(private http:HttpClient) { }

  public login(username,password){
    return this.http.get(this.host+"login="+username+"&password="+password)
  }

  public setNom(name){
    localStorage.setItem('nom', name)
  }

  public setPremon(name){
    localStorage.setItem("prenom", name)
  }

  public setLogin(name){
    localStorage.setItem("login", name)
  }

  public getLogin(){
    return localStorage.getItem("login")
  }
  public getNom(){
    return localStorage.getItem("nom")
  }
  public getPrenom(){
    return localStorage.getItem("prenom")
  }
}
