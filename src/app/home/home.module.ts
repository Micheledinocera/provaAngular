import { NgModule } from '@angular/core';
import { HomeRoutingModule} from './home-routing.module';
import { NbRouteTabsetModule } from '@nebular/theme';
import { ChartsModule } from 'ng2-charts';
import { NbCardModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../theme/theme.module';
import { SharedModule} from '../shared/shared.module';
import { CountUpModule } from 'countup.js-angular2';
import { CustomSelectModule } from '../ui/custom-select/custom-select.module';
import {MatSelectModule} from '@angular/material/select';

// import { AngularEchartsModule } from 'ngx-echarts';

import { routingComponents} from './home-routing.module';
import { AnalitycsComponent } from './analitycs/analitycs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TipsComponent } from './tips/tips.component';
import { TeamComponent } from './team/team.component';
import { BubbleMapComponent} from './analitycs/bubble-map/bubble-map.component';
import { LineChartComponent } from './analitycs/line-chart/line-chart.component';
import { PieChartComponent } from './analitycs/pie-chart/pie-chart.component';
import { BarChartComponent } from './analitycs/bar-chart/bar-chart.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TipComponent } from './tips/tip/tip.component';
import { UserComponent } from './team/user/user.component';

@NgModule({
    declarations: [
      routingComponents,
      AnalitycsComponent,
      DashboardComponent,
      TipsComponent,
      TeamComponent,
      PieChartComponent,
      BubbleMapComponent,
      LineChartComponent,
      BarChartComponent,
      TableViewComponent,
      TipComponent,
      UserComponent
    ],
    imports: [
      ThemeModule,
      NbRouteTabsetModule,
      HomeRoutingModule,
      CustomSelectModule,
      MatSelectModule,
      NbCardModule,
      NbUserModule,
      ChartsModule,
      CountUpModule,
      // AngularEchartsModule
    ],
})
export class HomeModule { }
