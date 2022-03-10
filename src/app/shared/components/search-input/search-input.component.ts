import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  public autocompleteItemValue$: Observable<string> =
    this.weatherService.currentSearchValue$;
  public searchInput: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor(
    private searchService: SearchService,
    private weatherService: WeatherService
  ) {}

  public searchItems(): void {
    this.searchService.inputValue$.next(this.searchInput.value);
  }

  public submitSearch(event?: KeyboardEvent): void {
    if (event && event.key !== 'Enter') {
      return;
    }
    this.weatherService.getWeather(this.searchInput.value);
  }
}
