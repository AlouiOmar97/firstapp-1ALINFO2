import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  url='http://localhost:3000/residence/'
  constructor(private http: HttpClient) { }

  findAllResidences():Observable<Residence[]>{
    return this.http.get<Residence[]>(this.url)
  }

  findResidenceById(id: string):Observable<Residence>{
    return this.http.get<Residence>(this.url+id)
  }

}
