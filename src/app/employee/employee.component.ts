import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../iemployee';
import { EmployeeService } from '../employee.service';
import { EmployeeWebService } from './employee-web.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeWebService]
})
export class EmployeeComponent implements OnInit {

  employee : IEmployee[];
     
  constructor(private _employeeService: EmployeeWebService) {
   
  }

  ngOnInit() {
    this._employeeService.getEmployee().subscribe(employeeData=> this.employee = employeeData)
     
  }

  RefreshData(){
    this.employee = [     
      {code:'Emp01', firstName:'Virat', lastName:'Kohali', gender:'Male', birthDate:'11/05/1988', annualSalary:90000, departmentId:1},
      {code:'Emp02', firstName:'Rohit', lastName:'Sharma', gender:'Male', birthDate:'4/30/1987' ,annualSalary:60000, departmentId:2},
      {code:'Emp03', firstName:'Shikhar', lastName:'Dhawan', gender:'Male', birthDate:'12/05/1988', annualSalary:50000, departmentId:2},
      {code:'Emp04', firstName:'Mithali', lastName:'Raj', gender:'Female', birthDate:'12/03/1982', annualSalary:80000, departmentId:3},
      {code:'Emp05', firstName:'Harmanpreet', lastName:'Kaur', gender:'Female', birthDate:'03/08/1989', annualSalary:7500, departmentId:3},
      {code:'Emp06', firstName:'New', lastName:'Employee', gender:'Female', birthDate:'03/08/1989', annualSalary:7500, departmentId:3}  
  ]    
  }

  optionSelected : string = 'All';

  trackByEmpCode(emp: any) : string {
    return emp.code
  }
  getTotalEmployee (): number {
    return this.employee.length;
  }
  getMaleTotalEmployee (): number {
    return this.employee.filter(e=> e.gender == 'Male').length;
  }

  getFemaleTotalEmployee ():number {
    return this.employee.filter(e=> e.gender == 'Female').length;
  }

  optionSelectionChanged(value: any) {    
    this.optionSelected = value;
    
  }
}
