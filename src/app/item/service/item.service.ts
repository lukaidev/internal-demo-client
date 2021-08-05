import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/item`);
  }

  getItem(id: any): Observable<Item> {
    return this.http.get<Item>(`${this.url}/item/${id}`);
  }

}
