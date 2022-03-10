import { Component, OnInit } from '@angular/core';
import { NavigationService } from './shared/services/navigation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public time$!: Observable<string>;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.time$ = this.navigationService.timeOfDay();
  }
}
