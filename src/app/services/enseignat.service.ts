import { baseURL } from './../shared/baseURL';
import { Enseignant } from './../shared/enseignant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignatService {

  constructor(private http: HttpClient) { }
  createEnseignant(user: Enseignant): Observable<Object> {
    return this.http.post(baseURL + 'enseignants', user);
  }
  getAll(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(baseURL +'enseignants');
  }
  getNbreEnsei() :Observable<number>{
    return this.http.get<number>(baseURL+'nbreEnseignants');
  }
}
