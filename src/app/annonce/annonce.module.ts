import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { AnnonceComponent } from './annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { HomeAnnonceComponent } from './home-annonce/home-annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';



@NgModule({
  declarations: [
    AnnonceComponent,
    ListAnnonceComponent,
    HomeAnnonceComponent,
    AddAnnonceComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ]
})
export class AnnonceModule { }
