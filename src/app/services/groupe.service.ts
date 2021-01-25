import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseURL';
import { EnseiMat } from '../shared/enseigMat';
import { Groupe } from '../shared/groupe';
import { PostGroupe } from '../shared/postGroupe';
import { Etudiant } from '../shared/student';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http: HttpClient) { }
  createGroupe (post: PostGroupe ): Observable<any> {
    const idSec = post.groupe.sectionId;
    post.groupe.sectionId = null;
    return this.http.post(baseURL + 'groupes/section/'+idSec, post);
  }
  getGroupBySec (id : number): Observable<any> {
    return this.http.get(baseURL + 'groupes/section/'+id);
  }
  getNbreGroupes() :Observable<number>{
    return this.http.get<number>(baseURL+'nbreGroupe');
  }
  getAffects(id: number) :Observable<EnseiMat[]>{
    return this.http.get<EnseiMat[]>(baseURL+'affects/'+id);
  }
  getClassmates(id: number) : Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(baseURL+"classmates/"+id);
  }
}
