import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user:any
  constructor(private loginService:LoginServiceService,private router:Router) { }

  public authenfier:boolean;
  private token:string
  public contact = {
    logo:"assets/images/kalanso.jpeg"
  }

  ngOnInit() {

  }

  loginUser(users) {
    this.loginService.login(users.username,users.password).subscribe((data:any)=>{
      this.user = data
    if(data){
      this.loginService.setLogin(data.login)
      this.loginService.setNom(data.nom)
      this.loginService.setPremon(data.prenom)
      this.router.navigateByUrl("/bienvenue")
    }else{
      this.router.navigateByUrl("/login")
    }
    })
  }
  saveToken() {
  this.token="connect";
    localStorage.setItem("myToken",this.token)
  }

  loadToken(){
    this.token = localStorage.getItem("myToken")
    if(this.token == "connect"){
      this.authenfier = true;
    }else{
      this.authenfier = false;
    }
    return true
  }

}
