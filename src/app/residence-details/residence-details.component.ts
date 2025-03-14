import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  id=0
  residence!: Residence
  listResidences:Residence[]=[
      {id:1,"name": "El fel","address":"Borj Cedria","image":"../../assets/images/R1.jpg", status: "Disponible", showLocation: false },
      {id:2,"name": "El yasmine","address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible" , showLocation: false },
      {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status:"Vendu", showLocation: false },
      {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction", showLocation: false}
  ];
  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit(){
    this.id= this.activatedRoute.snapshot.params['id']
    for (let i = 0; i < this.listResidences.length; i++) {
      if(this.id==this.listResidences[i].id){
        this.residence= this.listResidences[i]
      }      
    }
  }

}
