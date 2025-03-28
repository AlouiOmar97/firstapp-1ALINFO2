import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';

const routes: Routes=[
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'residence', component:ResidenceComponent },
  { path:'residence/add', component:AddResidenceComponent },
  { path:'residence/details/:id', component:ResidenceDetailsComponent},
  { path:'residence/update/:id', component:UpdateResidenceComponent},
  { path:'apartment', component:ApartmentComponent },
  { path:'apartment/add', component:AddApartmentComponent },
  { path:'**', component:NotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
