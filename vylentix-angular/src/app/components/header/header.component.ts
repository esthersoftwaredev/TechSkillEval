import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.setTheme(document.body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme');
  }
}
