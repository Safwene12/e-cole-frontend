import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseURL';
import { Matiere } from '../shared/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http: HttpClient) { }
  createSpecialite(matiere : Matiere): Observable<Object> {
    const section = matiere.section;
    matiere.section=baseURL+"sections/"+section;
    return this.http.post(baseURL + 'matieres', matiere);
  }
  getMatieresByIdSection(idSec : number): Observable<Matiere[]>  {
    return this.http.get<Matiere[]>(baseURL+"matiere/section/"+idSec);
  }
}
