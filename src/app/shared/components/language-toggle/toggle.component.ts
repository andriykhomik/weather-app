import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { Language } from '../../interfaces/interfaces';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  public languages: Language[] = [
    { language: 'UA', isActive: true },
    { language: 'EN', isActive: false },
  ];

  constructor(private navigateService: NavigationService) {}

  ngOnInit(): void {
    this.languages = this.navigateService.currentLanguage(this.languages);
  }

  toggleLanguage(event: any) {
    this.languages.forEach((language: Language) => {
      language.isActive = language.language.includes(event.innerText.trim());
    });
    localStorage.setItem('language', JSON.stringify(this.languages));
  }
}
