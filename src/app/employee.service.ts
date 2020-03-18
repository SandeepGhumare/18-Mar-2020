import { Injectable } from '@angular/core';
import { IEmployee } from './iemployee';

@Injectable()
export class EmployeeService {

  constructor() { }
  getEmployee(): IEmployee[] {
    return [     
      {code:'Emp01', firstName:'Virat', lastName:'Kohali', gender:'Male', birthDate:'11/05/1988', annualSalary:90000, departmentId:1},
      {code:'Emp02', firstName:'Rohit', lastName:'Sharma', gender:'Male', birthDate:'4/30/1987' ,annualSalary:60000, departmentId:2},
      {code:'Emp03', firstName:'Shikhar', lastName:'Dhawan', gender:'Male', birthDate:'12/05/1988', annualSalary:50000, departmentId:2},
      {code:'Emp04', firstName:'Mithali', lastName:'Raj', gender:'Female', birthDate:'12/03/1982', annualSalary:80000, departmentId:3},
      {code:'Emp05', firstName:'Harmanpreet', lastName:'Kaur', gender:'Female', birthDate:'03/08/1989', annualSalary:7500, departmentId:3} 
  ]    
  }
}
