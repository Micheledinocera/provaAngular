import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterService } from '../service/event-emitter/event-emitter.service';
import {animate, style, transition, trigger, keyframes} from '@angular/animations';
declare var $: any;

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  animations: [
    trigger('slide', [
        transition('* => true', animate('0.75s ease-out', style({
            transform: 'scale(1)'
        })))
    ])
]
})
export class RandomComponent implements OnInit {

  data;
  timeRange;
  state;

  constructor(private ee: EventEmitterService) {
    this.data = {};
    this.timeRange = {};
    ee.onComponentAppear.subscribe(
      (randomData) => {
        this.data = randomData.data;
        this.timeRange = randomData.timeRange;
        this.state =  randomData.state;
    });
  }

  ngOnInit() {
  }

  navigate(event) {
    $('.random').css('transform', 'scale(1)');
  }
}
