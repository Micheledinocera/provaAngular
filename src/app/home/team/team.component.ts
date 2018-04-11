import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DataService } from '../../service/data/data.service';
import { EventEmitterService } from '../../service/event-emitter/event-emitter.service';
import { AnimationController } from '../../animationController';
declare var $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: AnimationController.animation
})
export class TeamComponent implements OnInit, OnDestroy, OnChanges {

  users;
  containersNumberArray;
  time;
  state;
  constructor(private ds: DataService, private ee: EventEmitterService) {
    ee.onSelectSiteEvent.subscribe(
      (selectedSite) => {
        AnimationController.clearTimeout();
        this.users = this.ds.getUsers()[selectedSite];
        this.containersNumberArray = Array(Math.ceil(this.users.length / 2)).fill(0).map((x, i) => i);
    });
    ee.onComponentAppear.subscribe((data) => {
      this.time++;
    });
  }

  ngOnInit() {
    this.time = 1;
    $('.ittweb-tabset').children(0).children(0).eq(1).removeClass('active');
    this.users = this.ds.getUsers()[this.ds.getSelectedSite()];
    this.containersNumberArray = Array(Math.ceil(this.users.length / 4)).fill(0).map((x, i) => i);
    window.scrollTo(0, 0);
  }

  startAnimation() {
    AnimationController.startAnimation(this.ee);
  }

  endAnimation() {
    AnimationController.endAnimation(this.ee);
  }

  ngOnDestroy() {

  }

  ngOnChanges() {

  }
}
