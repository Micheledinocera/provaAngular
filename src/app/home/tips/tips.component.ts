import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data/data.service';
import { EventEmitterService } from '../../service/event-emitter/event-emitter.service';
import { AnimationController } from '../../animationController';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
  animations: AnimationController.animation
})
export class TipsComponent implements OnInit {

  data = [];
  time;
  state;
  selectedSite;
  containersNumberArray = [0];

  constructor(private ds: DataService, private ee: EventEmitterService) {
    ee.onSelectSiteEvent.subscribe(
      (selectedSite) => {
        this.data = this.ds.getTips()[selectedSite];
        this.containersNumberArray = Array(Math.ceil(this.data.length / 2)).fill(0).map((x, i) => i);
    });
    ee.onComponentAppear.subscribe((data) => {
      this.time++;
    });
   }

  ngOnInit() {
    this.time = 1;
    $('.ittweb-tabset').children(0).children(0).eq(1).removeClass('active');
    this.data = this.ds.getTips()[this.ds.getSelectedSite()];
    this.containersNumberArray = Array(Math.ceil(this.data.length / 2)).fill(0).map((x, i) => i);
  }

  startAnimation() {
    AnimationController.startAnimation(this.ee);
  }

  endAnimation() {
    AnimationController.endAnimation(this.ee);
  }
}
