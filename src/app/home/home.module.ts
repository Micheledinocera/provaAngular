import { NgModule } from '@angular/core';
import { HomeRoutingModule} from "./home-routing.module";
import { NbRouteTabsetModule } from "@nebular/theme";
import { ChartsModule } from 'ng2-charts';
import { NbCardModule } from "@nebular/theme";

import { routingComponents} from "./home-routing.module";
import { AnalitycsComponent } from './analitycs/analitycs.component';
import { SetupComponent } from './setup/setup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TipsComponent } from './tips/tips.component';
import { TeamComponent } from './team/team.component';
import { BubbleMapComponent} from "./analitycs/bubble-map/bubble-map.component";
import { PieChartComponent } from './analitycs/pie-chart/pie-chart.component';
import { ThemeModule } from '../theme/theme.module';
import { LineChartComponent } from './analitycs/line-chart/line-chart.component';
import { BarChartComponent } from './analitycs/bar-chart/bar-chart.component';

@NgModule({
    declarations: [
        routingComponents,
        AnalitycsComponent,
        SetupComponent,
        DashboardComponent,
        TipsComponent,
        TeamComponent,
        BubbleMapComponent,
        PieChartComponent,
        LineChartComponent,
        BarChartComponent
    ],
    imports: [
        ThemeModule,
        NbRouteTabsetModule,
        HomeRoutingModule,
        NbCardModule,
        ChartsModule
    ]
})
export class HomeModule { }
