import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public darkMode$: Observable<string> = this.navigateService.mode$;

  constructor(private navigateService: NavigationService) {}
}
