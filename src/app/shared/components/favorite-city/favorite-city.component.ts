import { Component } from '@angular/core';
import { Favorite } from '../../interfaces/interfaces';
import { FavoriteCityService } from '../../services/favorite-city.service';
import { Observable } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-favorite-city',
  templateUrl: './favorite-city.component.html',
  styleUrls: ['./favorite-city.component.scss'],
})
export class FavoriteCityComponent {
  public isShow: boolean = false;
  public favoriteList$: Observable<Favorite[]> =
    this.favCityService.favoriteCitiesList$;

  constructor(
    private weatherService: WeatherService,
    private favCityService: FavoriteCityService,
    private searchService: SearchService
  ) {}

  public favoriteListOperator(el: any, favorite: Favorite): void {
    const chosenLocation = `${favorite.city}, ${favorite.country}`;
    if (el.classList.contains('location-data')) {
      this.isShow = false;
      this.searchService.currentSearchValue$.next(chosenLocation);
    } else if (el.classList.contains('remove-location')) {
      this.isShow = true;
      this.favCityService.changeFavoriteList(favorite);
    }
  }
}
