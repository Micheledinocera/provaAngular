import { Component} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent{

    // Pie
    public pieChartColors:Array<any> = [
        // {backgroundColor: ["red", "blue", "green"]}
    ];
    public pieChartLabels:string[] = ['dato1', 'dato2', 'dato3'];
    public pieChartData:number[] = [300, 500, 100];
    public pieChartType:string = 'pie';

    // events
    public chartClicked(e:any):void {

    }

    public chartHovered(e:any):void {

    }

}
