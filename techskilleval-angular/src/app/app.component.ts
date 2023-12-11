import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setTheme('dark-theme');

    this.themeService.theme$.subscribe((theme) => {
      document.body.classList.remove('light-theme', 'dark-theme');
      document.body.classList.add(theme);
    });
  }
}
