import { Component, Input } from '@angular/core';
import { Favorite } from '../../interfaces/interfaces';
import { FavoriteCityService } from '../../services/favorite-city.service';
import { Observable } from 'rxjs';
import { WeatherService } from '../../services/weather.service';

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
    private favCityService: FavoriteCityService
  ) {
    // localStorage.setItem(
    //   'favoriteLocations',
    //   JSON.stringify([
    //     { city: 'Lviv', country: 'Ukraine' },
    //     { city: 'Kiew', country: 'Ukraine' },
    //     { city: 'Luck', country: 'Ukraine' },
    //     { city: 'Malniv', country: 'Ukraine' },
    //   ])
    // );
  }

  public favoriteListOperator(el: any, favorite: Favorite): void {
    const chosenLocation = `${favorite.city}, ${favorite.country}`;
    if (el.classList.contains('location-data')) {
      this.isShow = false;
      this.weatherService.getWeather(chosenLocation);
    } else if (el.classList.contains('remove-location')) {
      this.isShow = true;
      this.favCityService.changeFavoriteList(favorite);
    }
  }
}
