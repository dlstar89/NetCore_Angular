import { trigger, state, style, transition, animate } from '@angular/animations';

export const buttonHoverAnimation =
    trigger('hoverAnimation', [
        transition(':enter', [   // :enter is alias to 'void => *'
            style({ opacity: 0 }),
            animate(250, style({ opacity: 1 }))
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
            animate(100, style({ opacity: 0 }))
        ])
    ]);