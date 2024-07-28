import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from './../../environments/environment';

const baseUrl = environment.apiReport;

@Injectable({
    providedIn: 'root'
})
export class ReportService {

    constructor(private http: HttpClient) { }

    download(): Observable<any> {
        return this.http.post<any>(`${baseUrl}`, null, { 'responseType': 'arraybuffer' as 'json' });
    }


}