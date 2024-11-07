import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = 'aa';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  tasks(): Observable<any> {
    return this.http.get('http://localhost:5014/api/TaskItems');
  }
}
