import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseURL';
import { Enseignant } from '../shared/enseignant';
import { Etudiant } from '../shared/student';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUserById(id : number) :Observable<Etudiant> {
    return this.http.get<Etudiant>(baseURL+'user/'+id);
  }
  getUserUserById(id : number) :Observable<User> {
    return this.http.get<User>(baseURL+'user/'+id);
  }
  getAllUser() : Observable<User[]>{
    return this.http.get<User[]>(baseURL+'users');
  }
}
