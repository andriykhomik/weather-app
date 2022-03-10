import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../shared/services/search.service';
import { Observable } from 'rxjs';
import { NavigationService } from '../../../shared/services/navigation.service';
import { WeatherData } from '../../../shared/interfaces/interfaces';
import { WeatherService } from '../../../shared/services/weather.service';

@Component({
  selector: 'app-landing-item',
  templateUrl: './landing-item.component.html',
  styleUrls: ['./landing-item.component.scss'],
})
export class LandingItemComponent implements OnInit {
  public currentWeather$: Observable<WeatherData> =
    this.weatherService.currentWeather$;
  public darkMode: Observable<string> = this.navigationService.mode$;

  constructor(
    private searchService: SearchService,
    private navigationService: NavigationService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.weatherService.getWeather();
  }
}
