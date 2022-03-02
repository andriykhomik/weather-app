import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FavoriteCityComponent } from './components/favorite-city/favorite-city.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ToggleComponent } from './components/language-toggle/toggle.component';
import { ModeToggleComponent } from './components/mode-toggle/mode-toggle.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FavoriteCityComponent,
    SearchInputComponent,
    ToggleComponent,
    ModeToggleComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
