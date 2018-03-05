import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../service/event-emitter/event-emitter.service';
import { Kpi } from '../../model/Home/Kpi';
import { Table } from '../../model/Home/Table';
import { DataService } from '../../service/data/data.service';
import { AnimationController } from '../../animationController';
import { RandomComponent } from '../../random/random.component';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: AnimationController.animation
})
export class DashboardComponent implements OnInit {

  state;
  time;
  data= {};
  searchesData= {};
  clickedData= {};
  timeRanges;
  timeRangeClicked;
  timeRangeSearches;
  timeRangeKpis;

  constructor(private ds: DataService, private ee: EventEmitterService) {
    this.timeRanges = ds.getTimeRanges();
    this.timeRangeClicked = this.timeRanges[0];
    this.timeRangeSearches = this.timeRanges[0];
    this.timeRangeKpis = this.timeRanges[0];
    ee.onSelectSiteEvent.subscribe(
      (selectedSite) => {
        this.getDataFromDataService(selectedSite);
    });
    this.clickedData = this.searchesData;
    ee.onComponentAppear.subscribe((data) => {
      this.time++;
    });
  }

  ngOnInit() {
    this.time = 1;
    this.getDataFromDataService(this.ds.getSelectedSite());
    $('.ittweb-tabset').children(0).children(0).eq(1).removeClass('active');
  }

  getDataFromDataService(selectedSite) {
    if (this.ds.getDashboard()[selectedSite]) {
      this.data = this.ds.getDashboard()[selectedSite].kpi;
      this.searchesData = this.ds.getDashboard()[selectedSite].searches;
      this.clickedData = this.ds.getDashboard()[selectedSite].clicked;
    } else {
      this.data = Kpi.getEmptyKpis(this.ds);
      this.searchesData = Table.getEmptyTable(this.ds);
      this.clickedData = Table.getEmptyTable(this.ds);
    }
  }

  startAnimation() {
    AnimationController.startAnimation(this.ee);
  }

  endAnimation() {
    AnimationController.endAnimation(this.ee);
  }
}
