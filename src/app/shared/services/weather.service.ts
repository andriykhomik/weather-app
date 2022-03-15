import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {
  DayForecast,
  ResponseData,
  WeatherData,
} from '../interfaces/interfaces';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  retry,
  throwError,
} from 'rxjs';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public currentWeather$: BehaviorSubject<WeatherData> =
    new BehaviorSubject<any>(Object);
  public currentSearchValue$: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      localStorage.getItem('location') || 'Lviv, Ukraine'
    );

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    @Inject('ATOKEN') private atoken: string,
    private httpClient: HttpClient,
    private searchService: SearchService
  ) {}

  public getWeather(inputValue?: string): void {
    const location = inputValue || this.currentSearchValue$.getValue();
    this.searchService.inputValue$.next('');
    this.currentSearchValue$.next(location);

    this.httpClient
      .get<ResponseData>(
        `${this.baseUrl}/v1/current.json?key=${this.atoken}&q=${location}&aqi=no`,
        { observe: 'response' }
      )
      .pipe(
        retry(3),
        map((response: HttpResponse<any>) => {
          localStorage.setItem(
            'location',
            `${response.body.location.name}, ${response.body.location.country}`
          );

          return {
            city: response.body.location.name,
            country: response.body.location.country,
            cloud: response.body.current.cloud,
            icon: response.body.current.condition?.icon,
            time: new Date(),
            alt: response.body.current.condition?.text,
            temperatureC: response.body.current.temp_c,
            windDirection: response.body.current.wind_dir,
            speedWind: response.body.current.wind_kph,
            status: response.status,
          };
        }),
        catchError(this.handleError)
      )
      .subscribe((weatherData: WeatherData) =>
        this.currentWeather$.next(weatherData)
      );
  }

  public handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  public getDayForecast(): void {
    this.httpClient
      .get<any>(
        `${this.baseUrl}/v1/forecast.json?key=${
          this.atoken
        }&q=${this.currentSearchValue$.getValue()}&days=1&aqi=no&alerts=no`,
        { observe: 'response' }
      )
      .pipe(
        map((response: any) => {
          console.log(response.body.forecast.forecastday[0].day);
          return {
            city: response.body.location.name,
            country: response.body.location.country,
            cloud: response.body.current.cloud,
            precip_mm: response.body.current.precip_mm,
            humidity: response.body.current.humidity,
            pressure: response.body.current.pressure_mb,
            icon: response.body.current.condition?.icon,
            time: new Date(),
            alt: response.body.current.condition?.text,
            temperatureC: response.body.current.temp_c,
            windDirection: response.body.current.wind_dir,
            speedWind: response.body.current.wind_kph,
            status: response.status,
            dayForecast: response.body.forecast.forecastday[0].hour,
            averageWeatherData: response.body.forecast.forecastday[0].day,
          };
        }),
        catchError(this.handleError)
      )
      .subscribe((response) => console.log(response));
  }
}
