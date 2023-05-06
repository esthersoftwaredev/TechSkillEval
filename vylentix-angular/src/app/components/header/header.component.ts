import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoSrc = '../../../assets/images/logo-square-white.png';
  isDarkTheme = true;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme$.subscribe((theme) => {
      this.isDarkTheme = theme === 'dark-theme';
      this.logoSrc = this.isDarkTheme
        ? '../../../assets/images/logo-square-white.png'
        : '../../../assets/images/logo-square.png';
    });
  }

  toggleTheme(): void {
    this.themeService.setTheme(document.body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme');
  }
}
