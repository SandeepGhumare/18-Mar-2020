import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform {

  transform(value: any, gender: string): any {
    if( gender.toLowerCase() === 'male')
    return 'Mr.' + value;
    else 
        return 'Miss. ' + value;
  }

}
