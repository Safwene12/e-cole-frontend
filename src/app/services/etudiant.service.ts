import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseURL';
import { Etudiant } from '../shared/student';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }
  createEtud(user: Etudiant, idGroupe : number): Observable<Object> {
    return this.http.post(baseURL + 'etudiants/groupe/'+idGroupe, user);
  }

  getNbreEtudiants() :Observable<number>{
    return this.http.get<number>(baseURL+'nbreEtudiants');
  }
  updateEtud(etudiant: Etudiant, idEtud : number): Observable<Object> {
    return this.http.put(baseURL + 'etudiant/'+idEtud, etudiant);
  }
  updateImg(file : File , idUser : number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST',baseURL+'uploadFile/'+idUser, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
}
