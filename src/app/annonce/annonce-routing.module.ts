import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { HomeAnnonceComponent } from './home-annonce/home-annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';

const routes: Routes=[
  { path:'annonce', component:AnnonceComponent, 
    children:[
       { path:'home', component:HomeAnnonceComponent},
       { path:'list', component:ListAnnonceComponent},
       { path:'add', component:AddAnnonceComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AnnonceRoutingModule { }
