import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../../shared/services/search.service';
import { Observable } from 'rxjs';
import { NavigationService } from '../../../shared/services/navigation.service';
import { WeatherData } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-landing-item',
  templateUrl: './landing-item.component.html',
  styleUrls: ['./landing-item.component.scss'],
})
export class LandingItemComponent implements OnDestroy {
  @Input() public weather!: WeatherData;
  public darkMode: Observable<string> = this.navigationService.mode$;
  private timeInterval = setInterval(this.time, 1000);

  constructor(
    private searchService: SearchService,
    private navigationService: NavigationService
  ) {}

  public time(): Date {
    return new Date();
  }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval);
  }
}
