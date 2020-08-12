import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componentt } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

  getMenuOptions() {
    return this.http.get<Componentt[]>('/assets/data/menu.json');
  }
}
