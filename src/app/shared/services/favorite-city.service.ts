import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Favorite } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FavoriteCityService {
  public favoriteCitiesList$: BehaviorSubject<Favorite[]> = new BehaviorSubject<
    Favorite[]
  >(
    localStorage.getItem('favoriteLocations')
      ? JSON.parse(localStorage.getItem('favoriteLocations') || '')
      : []
  );
  private currentLocationItem!: Favorite;

  public changeFavoriteList(location: Favorite) {
    let currentFavoriteList: Favorite[] = this.favoriteCitiesList$.getValue();
    this.doCurrentLocationItem();

    if (
      !this.favoriteCitiesList$.getValue().length ||
      !this.doCheckIsFavorite(location)
    ) {
      currentFavoriteList.push(location);
    } else {
      currentFavoriteList = currentFavoriteList.filter(
        (favLocation: Favorite) => {
          return (
            favLocation.city !== location.city ||
            favLocation.country !== location.country
          );
        }
      );
    }

    this.favoriteCitiesList$.next(currentFavoriteList);
    localStorage.setItem(
      'favoriteLocations',
      JSON.stringify(this.favoriteCitiesList$.getValue())
    );
  }

  private doCurrentLocationItem(): void {
    let currentLocation = localStorage.getItem('location');
    if (currentLocation) {
      this.currentLocationItem =
        this.strLocationToFavoriteObjLocation(currentLocation);
    }
  }

  public strLocationToFavoriteObjLocation(strLocation: string): Favorite {
    let currentLocationDataArr = strLocation
      .split(',')
      .map((item) => item.trim());
    return {
      city: currentLocationDataArr[0],
      country: currentLocationDataArr[1],
    };
  }

  public doCheckIsFavorite(favoriteLocation: Favorite): boolean {
    return this.favoriteCitiesList$.getValue().some((location: Favorite) => {
      return (
        location.city === favoriteLocation.city &&
        location.country === favoriteLocation.country
      );
    });
  }
}
