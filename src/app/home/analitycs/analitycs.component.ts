import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventEmitterService } from '../../service/event-emitter/event-emitter.service';
import { DataService } from '../../service/data/data.service';
import { Analytics } from '../../model/Home/Analytics';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MapChartData } from '../../model/Home/MapChartData';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AnimationController } from '../../animationController';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-analitycs',
  templateUrl: './analitycs.component.html',
  styleUrls: ['./analitycs.component.css'],
  animations: AnimationController.animation
})
export class AnalitycsComponent implements OnInit, OnDestroy {

  state;
  time = 1;
  timeRanges;
  lineChartSearch;
  timeRangeLineChartSearch;
  lineChartVisitors;
  timeRangeLineChartVisitors;
  clickedData;
  timeRangeClicked;
  lookingForData;
  timeRangeLookingFor;
  noResultsdData;
  timeRangeNoResults;
  charactersData;
  timeRangeCharacters;
  wordsData;
  timeRangeWords;
  conversionPerRowData;
  timeRangeConvertionPerRow;
  averageResultsData;
  timeRangeAverageResults;
  SearchesData;
  timeRangeSearches;
  ConversionData;
  timeRangeConversion;
  ClickPerRowData;
  timeRangeClickPerRow;
  UploadedProductsChartData;
  RequestChartDataData;
  timeRangeHorizontalLineChart;
  lineChartConversion;
  timeRangeLineChartConversion;
  kpis;
  timeRangeKpis;
  pieChartData;
  mapChartData;
  timeRangePieChartData;
  timeRangeMapChartData;

  constructor(private ee: EventEmitterService, private ds: DataService) {
    this.timeRanges = ds.getTimeRanges();
    this.timeRangeAverageResults = this.timeRanges[0];
    this.timeRangeConvertionPerRow = this.timeRanges[0];
    this.timeRangeWords = this.timeRanges[0];
    this.timeRangeCharacters = this.timeRanges[0];
    this.timeRangeLineChartSearch = this.timeRanges[0];
    this.timeRangeLineChartVisitors = this.timeRanges[0];
    this.timeRangeClicked = this.timeRanges[0];
    this.timeRangeLookingFor = this.timeRanges[0];
    this.timeRangeNoResults = this.timeRanges[0];
    this.timeRangeSearches = this.timeRanges[0];
    this.timeRangeConversion = this.timeRanges[0];
    this.timeRangeClickPerRow = this.timeRanges[0];
    this.timeRangeHorizontalLineChart = this.timeRanges[0];
    this.timeRangeLineChartConversion = this.timeRanges[0];
    this.timeRangeKpis = this.timeRanges[0];
    this.timeRangePieChartData = this.timeRanges[0];
    this.timeRangeMapChartData = this.timeRanges[0];
    ee.onSelectSiteEvent.subscribe((selectedSite) => {
      this.getDataFromDataService(selectedSite);
    });
    ee.onComponentAppear.subscribe((data) => {
      this.time++;
    });
  }

  endAnimation() {
    AnimationController.endAnimation(this.ee);
  }

  startAnimation() {
    AnimationController.startAnimation(this.ee);
  }

  ngOnInit() {
    this.time = 1;
    $('.ittweb-tabset').children(0).children(0).eq(1).removeClass('active');
    this.getDataFromDataService(this.ds.getSelectedSite());
    for ( const timeRange of this.timeRanges){
      this.pieChartData[timeRange][0].pieChartColors = [];
      for ( const j of this.pieChartData[timeRange][0].data)
        this.pieChartData[timeRange][0].pieChartColors.push(this.getRandomColor());
    }
    // this.timeout = setTimeout(() => this.ee.onComponentAppear.emit(''), 500);
  }

  ngOnDestroy() {
    // clearTimeout(this.timeout);
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getDataFromDataService(selectedSite) {
    if (this.ds.getAnalytics('lineChartSearch')[selectedSite]) {
      this.averageResultsData = this.ds.getAnalytics('averageResultsData')[selectedSite];
      this.wordsData = this.ds.getAnalytics('wordsData')[selectedSite];
      this.charactersData = this.ds.getAnalytics('charactersData')[selectedSite];
      this.conversionPerRowData = this.ds.getAnalytics('conversionPerRowData')[selectedSite];
      this.lineChartSearch = this.ds.getAnalytics('lineChartSearch')[selectedSite];
      this.lineChartVisitors = this.ds.getAnalytics('lineChartVisitors')[selectedSite];
      this.lookingForData = this.ds.getAnalytics('lookingFor')[selectedSite];
      this.clickedData = this.ds.getAnalytics('clicked')[selectedSite];
      this.noResultsdData = this.ds.getAnalytics('noResults')[selectedSite];
      this.SearchesData = this.ds.getAnalytics('searches')[selectedSite];
      this.ConversionData = this.ds.getAnalytics('conversion')[selectedSite];
      this.ClickPerRowData = this.ds.getAnalytics('clickPerRow')[selectedSite];
      this.UploadedProductsChartData = this.ds.getAnalytics('uploadedProductsChartData')[selectedSite];
      this.RequestChartDataData = this.ds.getAnalytics('requestChartData')[selectedSite];
      this.lineChartConversion = this.ds.getAnalytics('lineChartConversion')[selectedSite];
      this.kpis = this.ds.getAnalytics('kpis')[selectedSite];
      this.pieChartData = this.ds.getAnalytics('pieChartData')[selectedSite];
      this.mapChartData = this.ds.getAnalytics('mapChartData')[selectedSite];
    } else {
      const emptyInfo = Analytics.getEmptyAnalytics(this.ds);
      this.averageResultsData = emptyInfo.averageResultsData;
      this.wordsData = emptyInfo.wordsData;
      this.charactersData = emptyInfo.charactersData;
      this.conversionPerRowData = emptyInfo.conversionPerRowData;
      this.lineChartSearch = emptyInfo.lineChartSearch ;
      this.lineChartVisitors = emptyInfo.lineChartVisitors;
      this.lookingForData = emptyInfo.lookingFor;
      this.clickedData = emptyInfo.clicked;
      this.noResultsdData = emptyInfo.noResults;
      this.SearchesData = emptyInfo.searches;
      this.ConversionData = emptyInfo.conversion;
      this.ClickPerRowData = emptyInfo.clickPerRow;
      this.UploadedProductsChartData = emptyInfo.uploadedProductsChartData;
      this.RequestChartDataData = emptyInfo.requestChartData;
      this.lineChartConversion = emptyInfo.lineChartConversion;
      this.kpis = emptyInfo.kpis;
      this.pieChartData = emptyInfo.pieChartData;
      this.mapChartData = emptyInfo.mapChartData;
    }
  }
}
