import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'details/:location',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsModule),
  },
  {
    path: 'forecast/:location',
    loadChildren: () =>
      import('./forecast/forecast.module').then((m) => m.ForecastModule),
  },
  {
    path: 'history/:location',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
