import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './components/forecast/forecast.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { ForecastHeaderComponent } from './components/forecast-header/forecast-header.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { ForecastDataComponent } from './components/forecast-data/forecast-data.component';
import { ForecastDataItemComponent } from './components/forecast-data-item/forecast-data-item.component';
import { ForecastDetailsComponent } from './components/forecast-details/forecast-details.component';
import { ForecastDetailsItemComponent } from './components/forecast-details-item/forecast-details-item.component';

const routes: Routes = [{ path: '', component: ForecastComponent }];

@NgModule({
  declarations: [ForecastComponent, ForecastHeaderComponent, ForecastDataComponent, ForecastDataItemComponent, ForecastDetailsComponent, ForecastDetailsItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    MatIconModule,
    SharedModule,
  ],
})
export class ForecastModule {}
