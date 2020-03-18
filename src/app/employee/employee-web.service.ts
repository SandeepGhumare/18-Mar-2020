import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IEmployee } from '../iemployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeWebService {
  webURL:string = 'http://localhost:3000/Employees'
  constructor(private _httpclient: HttpClient) { }

  getEmployee() : Observable<IEmployee[]>{
    return this._httpclient.get<IEmployee[]>(this.webURL)
  }
}
