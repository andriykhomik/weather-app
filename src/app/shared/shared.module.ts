import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FavoriteCityComponent } from './components/favorite-city/favorite-city.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ToggleComponent } from './components/language-toggle/toggle.component';
import { ModeToggleComponent } from './components/mode-toggle/mode-toggle.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransformToISOPipe } from './pipes/transform-to-iso.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutocompleteListComponent } from './components/search-input/components/autocomplete-list/autocomplete-list.component';
import { AutocompleteItemComponent } from './components/search-input/components/autocomplete-item/autocomplete-item.component';
import { FavoriteCityItemComponent } from './components/favorite-city/favorite-city-item/favorite-city-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FavoriteCityComponent,
    SearchInputComponent,
    ToggleComponent,
    ModeToggleComponent,
    TransformToISOPipe,
    AutocompleteListComponent,
    AutocompleteItemComponent,
    FavoriteCityItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  exports: [HeaderComponent, FooterComponent, TransformToISOPipe],
})
export class SharedModule {}
