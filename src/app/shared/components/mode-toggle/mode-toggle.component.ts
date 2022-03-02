import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-mode-toggle',
  templateUrl: './mode-toggle.component.html',
  styleUrls: ['./mode-toggle.component.scss'],
})
export class ModeToggleComponent {
  public isDark: boolean = !!this.navigationService.mode$.getValue();
  constructor(private navigationService: NavigationService) {}

  public toggle(): void {
    this.navigationService.changeMode();
  }
}
