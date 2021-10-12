import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage implements OnInit {

  username: string
  nom: string
  prenom: string
  myData: string = new Date().toISOString()
  constructor(private loginService:LoginServiceService) { }

  ngOnInit() {
    this.username = this.loginService.getLogin()
    this.nom = this.loginService.getNom()
    this.prenom = this.loginService.getPrenom()
  }

}
