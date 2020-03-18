import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
 
 


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',  
  animations: [fadeIn]
})
export class AnimationComponent implements OnInit {
  employee: any[];
  constructor() { }

  ngOnInit() {
    this.employee = [
      {firstName:'Kapil'},
      {firstName:'Ravi'}
    ]
  }

  remove(firstName: string):void{
    let i = this.employee.indexOf(item=> item.firstName,0)
    this.employee.splice(i,1)
  }

}
