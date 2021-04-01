import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentreportService {

  private _url: string = "/assets/data/data.json";
  constructor(private http:HttpClient) { }

  getStudentReport(): Observable<any>{
    return this.http.get(this._url); 
  }
}
