import { Component, Input } from '@angular/core';
import { NavigationService } from './shared/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public time$ = this.navigationService.timeOfDay();

  constructor(private navigationService: NavigationService) {}
}
