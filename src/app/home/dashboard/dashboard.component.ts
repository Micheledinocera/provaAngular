import { Component, OnInit } from '@angular/core';
import {DataService} from "../../service/data/data.service";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    data={};
    searchesData={};
    clickedData={}
    timeRanges;
    timeRangeClicked;
    timeRangeSearches;
    timeRangeKpis;

    constructor() {
        this.timeRanges = DataService.getTimeRanges();
        this.timeRangeClicked = this.timeRanges[0];
        this.timeRangeSearches = this.timeRanges[0];
        this.timeRangeKpis = this.timeRanges[0];
        this.data[this.timeRanges[0]] = [{
            title: "Total Search",
            value: 440
        }, {
            title: "Unique Visitors",
            value: 80
        }, {
            title: "Average page visits per user",
            value: "5,5"
        }, {
            title: "Total conversion value",
            value: "10.000"
        }, {
            title: "Average value per conversion",
            value: "125"
        }, {
            title: "Altro valore",
            value: "xx"
        }];
        this.data[this.timeRanges[1]] = [{
            title: "Total Search",
            value: 445
        }, {
            title: "Unique Visitors",
            value: 90
        }, {
            title: "Average page visits per user",
            value: "6,5"
        }, {
            title: "Total conversion value",
            value: "16.000"
        }, {
            title: "Average value per conversion",
            value: "135"
        }, {
            title: "Altro valore",
            value: "xx"
        }];
        this.data[this.timeRanges[2]] = [{
            title: "Total Search",
            value: 540
        }, {
            title: "Unique Visitors",
            value: 100
        }, {
            title: "Average page visits per user",
            value: "5,4"
        }, {
            title: "Total conversion value",
            value: "30.000"
        }, {
            title: "Average value per conversion",
            value: "325"
        }, {
            title: "Altro valore",
            value: "xx"
        }];
        this.searchesData[this.timeRanges[0]] = [{
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }];
        this.searchesData[this.timeRanges[1]] = [{
            query: "Total Search",
            avg: 445,
            count:505
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }];
        this.searchesData[this.timeRanges[2]] = [{
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }, {
            query: "Total Search",
            avg: 440,
            count:500
        }];
        this.clickedData=this.searchesData;
    }
  ngOnInit() {
      $(".ittweb-tabset").children(0).children(0).eq(1).removeClass("active");
  }

}
