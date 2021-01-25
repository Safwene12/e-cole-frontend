import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseURL';
import { Specialite } from '../shared/specialite';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {


  constructor(private http: HttpClient) { }
  createSpecialite(spec : Specialite): Observable<Object> {
    return this.http.post(baseURL + 'specialites', spec);
  }
  getSpeciality(): Observable<Specialite[]> {
    return this.http.get<Specialite[]>(baseURL +'specialites');
  }
  getNbreSpec() :Observable<number>{
    return this.http.get<number>(baseURL+'nbreSpec');
  }
}
