import { Component } from '@angular/core';
import { Apartment } from '../core/models/apartment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
apartment: Apartment = {
  apartNum: 0, 
  floorNum: 0, 
  surface: 0, 
  terrace: false,
  surfaceterrace: 0, 
  category: "", 
  residenceId: 0 
}
addApartmentForm!:FormGroup

ngOnInit(){
  this.addApartmentForm= new FormGroup({
    apartNum: new FormControl(this.apartment.apartNum, [Validators.required, Validators.min(0)]),
    floorNum: new FormControl(this.apartment.floorNum, [Validators.required, Validators.min(0)]),
    surface: new FormControl(this.apartment.surface, Validators.required),
    terrace: new FormControl(this.apartment.terrace, Validators.required),
    surfaceTerrace: new FormControl(this.apartment.surfaceterrace, Validators.required),
    category: new FormControl(this.apartment.category, Validators.required),
    residenceId: new FormControl(this.apartment.residenceId, Validators.required)
  })
}

get apartNum(){ return this.addApartmentForm.get('apartNum')}
get floorNum(){ return this.addApartmentForm.get('floorNum')}
get surface(){ return this.addApartmentForm.get('surface')}
get terrace(){ return this.addApartmentForm.get('terrace')}
get surfaceTerrace(){ return this.addApartmentForm.get('surfaceTerrace')} 
get category(){ return this.addApartmentForm.get('category')}
get residenceId(){ return this.addApartmentForm.get('residenceId')}

addApartment(){
  console.log("Add Apartment")
  console.log(this.addApartmentForm.value);
}

}
