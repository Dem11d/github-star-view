import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    httpClient = inject(HttpClient);
    private apiUrl = 'api';
    
    
    getRepositories(page: number = 1, filter?: Record<string, number>): Observable<any>{
        return this.httpClient.get(`${this.apiUrl}/repositories`, {params: {page, ...filter}});
    }
}