import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
const api = 'http://localhost:5014/api'
@Injectable({
    providedIn: 'root'
})

export class AppService{
    constructor(private http: HttpClient){}

    tasks(limit: number = 5): any{
        return this.http.get<any>(`${api}/TaskItems/?limit=`+ limit)
    }

}

