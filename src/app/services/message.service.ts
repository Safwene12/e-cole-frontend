import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseURL';
import { Message } from '../shared/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  createMessage(message : Message): Observable<Object> {
    return this.http.post(baseURL + 'message/'+message.idUserDest+'/'+message.idUserEnv, message);
  }
  getMessageSend(idEnv : number): Observable<Message[]>{
    return this.http.get<Message[]>(baseURL+"messages/"+idEnv);
  }
  getInboc(idDest : number): Observable<Message[]>{
    return this.http.get<Message[]>(baseURL+"inbox/"+idDest);
  }
  getMessageById(idMes : number): Observable<Message>{
    return this.http.get<Message>(baseURL+"message/"+idMes);
  }
  setVu(idMes : number): Observable<Object>{
    return this.http.get<Object>(baseURL+"message/vu/"+idMes);
  }
  getSpan(id : number): Observable<number>{
    return this.http.get<number>(baseURL+"span/"+id);
  }

}
