import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../../../shared/services/search.service';
import { ForecastService } from '../../../shared/services/forecast.service';
import { Forecast } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  public weekForecast$!: Observable<Forecast>;
  constructor(
    private searchService: SearchService,
    private forecastService: ForecastService
  ) {}

  ngOnInit(): void {
    this.getWeekForecast();
    this.weekForecast$.subscribe((week) => console.log(week));
  }

  private getWeekForecast(): void {
    this.searchService.currentSearchValue$.subscribe(() => {
      this.weekForecast$ = this.forecastService.getWeekForecast();
    });
  }
}
