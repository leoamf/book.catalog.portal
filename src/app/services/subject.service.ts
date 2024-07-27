import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Subject } from '../models/subject.model';

const baseUrl = 'http://localhost:8080/api/v1/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${baseUrl}/all`);
  }

  get(id: any): Observable<Subject> {
    return this.http.get<Subject>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}