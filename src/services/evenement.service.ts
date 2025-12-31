import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Member} from "../models/Member";
import {Evenement} from "../models/Evenement";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http: HttpClient) {

  }
  getAllEvenement(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>
    ("http://localhost:7000/evenements")
  }
  addEvenement(e:Evenement):Observable<void>{
    return this.http.post<void>("http://localhost:7000/evenements", e)
  }
  getEvenementByID(idCourant: any):Observable<Evenement> {
    return  this.http.get<Evenement>(`http://localhost:7000/evenements/${idCourant}`)
  }

  updateEvenement(idCourant: string, e:Evenement):Observable<void> {
    return this.http.put<void>(`http://localhost:7000/evenements/${idCourant}`,e)
  }
}
