import { Component, Input } from '@angular/core';
import { Favorite } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-favorite-city-item',
  templateUrl: './favorite-city-item.component.html',
  styleUrls: ['./favorite-city-item.component.scss'],
})
export class FavoriteCityItemComponent {
  @Input() public favorite!: Favorite;
}
