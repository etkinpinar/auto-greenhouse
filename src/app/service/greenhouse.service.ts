import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GreenhouseService {

  constructor(private http: HttpClient) {
  }

  getGreenhouse() {
    return this.http.get<any>(`http://localhost:8080/greenhouses`);
  }
}
