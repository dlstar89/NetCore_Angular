import { Component } from '@angular/core';
import { buttonHoverAnimation } from '../_animations/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
    animations: [buttonHoverAnimation]
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
