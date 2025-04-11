import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http: HttpClient) { }

  findAllResidences(){
    return this.http.get('http://localhost:3000/residence/')
  }

}
