import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  template: `<button class='colorClass' [class] = 'applyClasses' >My Buttom </button>
  <br/>
              <button class='colorClass' [class.boldClass] = 'applyBold' [class.italicClass] = 'applyItalic'> My Button </button>
  <br/> 
  <button class='colorClass' [ngClass] = 'addClasses()'> My Button </button>
  `,
  styleUrls: ['./class.component.css']
})
export class ClassComponent   {

   applyClasses : string = 'boldClass italicClass';
   applyBold : boolean = true;
    applyItalic : boolean = true;

  addClasses () {
    let classes = {boldClass: this.applyBold, italicClass: this.applyItalic }
    return classes;
  }
}
