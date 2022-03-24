import { Component, OnInit } from '@angular/core';
import { NavigationService } from './shared/services/navigation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public timeBG$: Observable<string> = this.navigationService.timeOfDay();
  public darkMode$: Observable<string> = this.navigationService.mode$;

  constructor(private navigationService: NavigationService) {}
}
