import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Weather } from '../interfaces/interfaces';
import { catchError, map, Observable, retry } from 'rxjs';
import { SearchService } from './search.service';
import { LocalStorageService } from './local-storage.service';
import { ErrorsService } from './errors.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    @Inject('ATOKEN') private atoken: string,
    private httpClient: HttpClient,
    private searchService: SearchService,
    private localStorageService: LocalStorageService,
    private errorService: ErrorsService
  ) {}

  public getWeather(): Observable<Weather> {
    const location = this.searchService.currentSearchValue$.getValue();
    this.searchService.inputValue$.next('');
    return this.httpClient
      .get<Weather>(
        `${this.baseUrl}/v1/current.json?key=${this.atoken}&q=${location}`,
        { observe: 'response' }
      )
      .pipe(
        retry(3),
        map((response: HttpResponse<any>) => {
          this.localStorageService.setLocationToLS();
          return {
            city: response.body.location.name,
            country: response.body.location.country,
            icon: response.body.current.condition?.icon,
            alt: response.body.current.condition?.text,
            temperatureC: response.body.current.temp_c,
            status: response.status,
          };
        }),
        catchError(this.errorService.handleError)
      );
  }
}
