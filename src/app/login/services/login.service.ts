import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://66a9529f613eced4eba51a33.mockapi.io/login'; 

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> { 
    return this.http.post<any>(this.apiUrl, credentials);
  }
}