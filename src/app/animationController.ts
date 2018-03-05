import {animate, style, transition, trigger, keyframes} from '@angular/animations';
import { EventEmitterService } from './service/event-emitter/event-emitter.service';
declare var $: any;

export class AnimationController {
  static animation = [
    trigger('appear', [
        transition(':enter', animate('0.75s ease-out', keyframes([
          style({transform: 'scale(0.1)', offset: 0}),
          style({transform: 'scale(1.1)', offset: 0.5}),
          style({transform: 'scale(1)', offset: 1.0}),
        ])))
    ])
  ];
  static timeout;

  constructor() {}

  static startAnimation(ee: EventEmitterService) {
    this.timeout = window.setTimeout(() => ee.onComponentAppear.emit(''), 300);
  }

  static endAnimation(ee: EventEmitterService) {
    $('.page-sub-title').css('transform', 'scale(1)');
  }

  static clearTimeout() {
    let id = this.timeout;
    while (id) {
      window.clearTimeout(id);
      id--;
    }
  }
}
