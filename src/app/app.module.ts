import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { AppRoutingModule } from './app-routing.module';
import { ApartmentComponent } from './apartment/apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AnnonceModule } from './annonce/annonce.module';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResidenceComponent,
    ApartmentComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    UpdateResidenceComponent,
    AddApartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AnnonceModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
