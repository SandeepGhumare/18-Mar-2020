import { trigger, state, animate, style, transition } from '@angular/animations';
export let fadeIn = trigger('fadeIn',[
    state('void',style({opacity:0})),           
    transition(':enter, :leave',[      
      animate(3000)
    ])
  ])