import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-animation-new',
  templateUrl: './animation-new.component.html',
  styleUrls: ['./animation-new.component.css'],
  animations : [
    trigger('effect', [
      transition('void => *',[
        style({backgroundColor: 'red', opacity:0}),
        animate(3000, style({backgroundColor: 'white', opacity:1}))
      ])
    ])
  ]
})
export class AnimationNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
