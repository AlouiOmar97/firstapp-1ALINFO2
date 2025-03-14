import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
addResidenceForm!: FormGroup
residence: Residence = {
  id:0,
  name:"",
  address: "",
  image:"",
  status:"",
  showLocation: false
}
ngOnInit(){
  this.addResidenceForm= new FormGroup({
    name: new FormControl(this.residence.name, [Validators.required, Validators.minLength(3)]),
    address: new FormControl(this.residence.address, Validators.required),
    image: new FormControl("../../assets/images/R1.jpg"),
    status: new FormControl("Disponible"),
    showLocation: new FormControl(false)
  })
}

get name(){ return this.addResidenceForm.get('name')}
get address(){ return this.addResidenceForm.get('address')}

addResidence(){
  console.log("Add Residence");
  console.log(this.addResidenceForm.value);
}

}
