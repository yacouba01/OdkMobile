import { Component, OnInit } from '@angular/core';
import { ApprenantServiceService } from '../services/apprenant-service.service';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.page.html',
  styleUrls: ['./apprenant.page.scss'],
})
export class ApprenantPage implements OnInit {

  private listes:any
  constructor(private apprenantService:ApprenantServiceService) { }

  ngOnInit() {
    this.listApprenants()
  }
  listApprenants(){
    this.apprenantService.listApprenant().subscribe((data:any)=>{
      this.listes = data;
      // console.log("La liste complete des apprenants", this.listes)
    });
  }
}
