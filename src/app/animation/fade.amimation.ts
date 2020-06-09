import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  state('in', style({ opacity: 1 })),
  transition(':enter', [
    style({ transform: 'scale(0.5)', opacity: 0 }),
    animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({ transform: 'scale(1)', opacity: 1 }))
    // style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))
  ]),
  transition(':leave',
    [style({ opacity: 1 }), animate('1000ms', style({ opacity: 0 }))]
  )
]);


export const listItemAnimation = trigger('listItemAnimation', [
  transition(':enter', [
    style({ transform: 'scale(0.5)', opacity: 0 }), animate('500ms', style({ transform: 'scale(1)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)', opacity: 1, height: '*' }),
    animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
      style({
        transform: 'scale(0.5)', opacity: 0,
        height: '0px', margin: '0px'
      }))
  ])
])