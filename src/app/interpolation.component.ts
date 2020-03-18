import { Component } from '@angular/core';

@Component({
    selector: 'app-interpolation',
    template: ` 
    <h1> Second Session </h1>
    <button disabled = {{isDisabled}}> My Button</button>     
    <input id = inputid value = 'Preludesys'>
    <br/>
    <button (click) = 'myClick()' > My Button2 </button>
    <br/>
    Name: <input [(ngModel)] = 'name' >
    <br/>
    You entered: {{name}}
    `
})
export class InterploationComponent{
    isDisabled: boolean = false;
    imagePath : string = 'assets/Red_Tulips.jpg';
    myClick() {
        console.log('Clicked');
    }

    name: string = 'Preludesys'
}