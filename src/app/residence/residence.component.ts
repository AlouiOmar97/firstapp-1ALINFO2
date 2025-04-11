import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria","image":"../../assets/images/R1.jpg", status: "Disponible", showLocation: false },
    {id:2,"name": "El yasmine","address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible" , showLocation: false },
    {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status:"Vendu", showLocation: false },
    {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction", showLocation: false}
    ];
  listFavoris:Residence[]=[]
  constructor(private residenceService: ResidenceService){}
  ngOnInit(){
    this.residenceService.findAllResidences().subscribe((data)=>{
      this.listResidences= data
    })
  }
  search=""
    toggleLocation(id: number){
      for (let i = 0; i < this.listResidences.length; i++) {
        if(this.listResidences[i].id === id){
          if(this.listResidences[i].address === "inconnu"){
            alert("Unknown Address")
          }else{
            this.listResidences[i].showLocation=!this.listResidences[i].showLocation
          }
        }
      }
    }

    likeResidence(residence: Residence){
      this.listFavoris.push(residence)
    }
}
