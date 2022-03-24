import { Component } from '@angular/core';
import { SearchService } from '../../../../services/search.service';
import { Observable } from 'rxjs';
import { AutocompleteRes } from '../../../../interfaces/interfaces';

@Component({
  selector: 'app-autocomplete-list',
  templateUrl: './autocomplete-list.component.html',
  styleUrls: ['./autocomplete-list.component.scss'],
})
export class AutocompleteListComponent {
  public autocompleteList$: Observable<any> =
    this.searchService.autocompleteList$;

  constructor(private searchService: SearchService) {}

  public chooseLocation(locationData: AutocompleteRes): void {
    this.searchService.currentSearchValue$.next(
      `${locationData.name}, ${locationData.country}`
    );
  }
}
