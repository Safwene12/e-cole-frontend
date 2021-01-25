import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseURL';
import { Section } from '../shared/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }
  createSection(section : Section): Observable<Object> {
    return this.http.post(baseURL + 'sections', section);
  }
  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(baseURL +'sections');
  }
}
