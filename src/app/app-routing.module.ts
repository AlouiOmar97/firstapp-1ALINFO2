import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes=[
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'residence', component:ResidenceComponent },
  { path:'apartment', component:ApartmentComponent },
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
