import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather, WeatherData } from '../../../shared/interfaces/interfaces';
import { WeatherService } from '../../../shared/services/weather.service';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  public currentWeather$!: Observable<Weather>;

  constructor(
    private weatherService: WeatherService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.getCurrentWeather();
  }

  private getCurrentWeather(): void {
    this.searchService.currentSearchValue$.subscribe(() => {
      this.currentWeather$ = this.weatherService.getWeather();
    });
  }
}
