import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public darkMode$: Observable<string> = this.navigateService.mode$;

  constructor(private navigateService: NavigationService) {}

  ngOnInit(): void {}
}
