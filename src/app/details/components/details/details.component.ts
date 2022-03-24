import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../../../shared/interfaces/interfaces';
import { DetailsService } from '../../../shared/services/details.service';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  public dayForecast$!: Observable<WeatherData>;

  constructor(
    private searchService: SearchService,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.getDayForecast();
  }

  private getDayForecast(): void {
    this.searchService.currentSearchValue$.subscribe(() => {
      this.dayForecast$ = this.detailsService.getDayForecast();
    });
  }
}
