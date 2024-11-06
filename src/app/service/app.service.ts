import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api = 'aa';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  tasks(limit: number):any{
    
  }
}
