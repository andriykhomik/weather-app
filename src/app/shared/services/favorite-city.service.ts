import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Favorite } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FavoriteCityService {
  public favoriteCitiesList$: BehaviorSubject<Favorite[]> = new BehaviorSubject<
    Favorite[]
  >(JSON.parse(localStorage.getItem('favoriteLocations') || ''));

  public changeFavoriteList(location?: Favorite) {
    let currentLocation = localStorage.getItem('location');
    if (currentLocation) {
      let currentLocationArr = currentLocation
        .split(',')
        .map((item) => item.trim());
      this.favoriteCitiesList$.getValue().forEach((locationItem: Favorite) => {
        if (
          location &&
          location.city === locationItem.city &&
          location.country === locationItem.country
        ) {
          this.favoriteCitiesList$.next(this.removeFromFavoriteList(location));
        }
        if (
          locationItem.city !== currentLocationArr[0] &&
          locationItem.country !== currentLocationArr[1]
        ) {
          this.favoriteCitiesList$.next(
            this.addToFavoriteList(currentLocationArr)
          );
        }
      });
    }
    localStorage.setItem(
      'favoriteLocations',
      JSON.stringify(this.favoriteCitiesList$.getValue())
    );
  }

  public addToFavoriteList(currentLocationArr: string[]): Favorite[] {
    return [
      ...this.favoriteCitiesList$.getValue(),
      { city: currentLocationArr[0], country: currentLocationArr[1] },
    ];
  }

  public removeFromFavoriteList(location: Favorite): Favorite[] {
    return [...this.favoriteCitiesList$.getValue()].filter(
      (locationItem: Favorite) => {
        return !(
          locationItem.city === location.city &&
          locationItem.country === location.country
        );
      }
    );
  }
}
