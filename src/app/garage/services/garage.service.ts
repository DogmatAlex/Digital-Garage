import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../components/garage.component';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  
  private apiUrl = 'https://66a9529f613eced4eba51a33.mockapi.io/cars'; 

  constructor(private http: HttpClient) {}

  sendCarData(car: Car): Observable<any> {
    return this.http.post(this.apiUrl, car);
  }

}
