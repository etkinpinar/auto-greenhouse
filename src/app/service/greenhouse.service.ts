import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import { io } from 'socket.io-client';
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
