import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
 

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent   {
  @Input()
  all: number;

  @Input()
  male : number;

  @Input()
  female:number;
   
  optionSelected :string = 'All';
  
  @Output()
  eventOptionSelected : EventEmitter<string> = new EventEmitter<string>();

  onOptionChangd() {
    this.eventOptionSelected.emit(this.optionSelected);
    console.log(this.optionSelected);
  }
}
