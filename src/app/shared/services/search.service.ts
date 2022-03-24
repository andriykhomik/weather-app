import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AutocompleteRes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public inputValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public autocompleteList$: Observable<AutocompleteRes[]> =
    this.getClientInputAutocompleteList();
  public currentSearchValue$: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      localStorage.getItem('location') || 'Lviv, Ukraine'
    );

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    @Inject('ATOKEN') private atoken: string,
    private httpClient: HttpClient
  ) {}

  public getClientInputAutocompleteList(): Observable<AutocompleteRes[]> {
    return this.inputValue$.pipe(
      switchMap((inputValue: string) => {
        return this.httpClient.get<AutocompleteRes[]>(
          `${this.baseUrl}/v1/search.json?key=${this.atoken}&q=${
            inputValue.trim().length > 2 ? inputValue : '0'
          }`
        );
      })
    );
  }
}
