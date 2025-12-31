import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../models/Member";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

//le decorateur @injectable indique que la service accepte d'etre injecte dans les components ou les services
export class MemberService {
  constructor(private http: HttpClient) {

  }
  GetAllMembers(): Observable<Member[]> {
    //generation de requete get
    return this.http.get<Member[]>
    ("http://localhost:7000/members")
  }
  AddMember(m:Member):Observable<void>{
    return this.http.post<void>("http://localhost:7000/members", m)
  }
  DeleteMember(id:string):Observable<void>{
    return this.http.delete<void>(`http://localhost:7000/members/${id}`)
  }

  GetMemberByID(idCourant: any):Observable<Member> {
    return  this.http.get<Member>(`http://localhost:7000/members/${idCourant}`)
  }

  UpdateMember(idCourant: string, m:Member):Observable<void> {
    return this.http.put<void>(`http://localhost:7000/members/${idCourant}`,m)
  }
}
