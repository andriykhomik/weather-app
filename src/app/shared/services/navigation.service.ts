import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable } from 'rxjs';
import { Language } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public mode$: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('mode') || ''
  );
  public timeOfDay$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'evening'
  );
  public interval = setInterval(() => {
    this.setBGImageName();
  }, 1000);

  public timeOfDay(): Observable<string> {
    this.setBGImageName();
    return this.timeOfDay$;
  }

  private setBGImageName(): void {
    const timeInt = new Date().getHours();
    this.timeOfDay$.next(
      timeInt >= 0 && timeInt < 6
        ? 'night'
        : timeInt >= 6 && timeInt < 12
        ? 'morning'
        : timeInt >= 12 && timeInt < 18
        ? 'day'
        : 'evening'
    );
  }

  public changeMode(): string {
    if (!this.mode$.getValue()) {
      this.mode$.next('dark');
    } else {
      this.mode$.next('');
    }
    localStorage.setItem('mode', this.mode$.getValue());
    return this.mode$.getValue();
  }

  public currentLanguage(languages: Language[]): Language[] {
    const languageLS = localStorage.getItem('language');
    if (languageLS && languageLS.length) {
      return JSON.parse(languageLS);
    }
    return languages;
  }
}
