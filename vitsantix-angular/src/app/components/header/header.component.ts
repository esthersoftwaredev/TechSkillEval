import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { NavItem } from 'src/app/models/nav-item';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoSrc = '../../../assets/images/logo-square-white.png';
  isDarkTheme = true;
  isLoggedIn: boolean = false;

  constructor(private themeService: ThemeService, private authService: AuthService) {}

  navItems: NavItem[] = [
    { label: 'HOME', link: '/home' },
    { label: 'ITSAs', link: '/assessments' },
    { label: 'ABOUT', link: '/about' },
    // { label: 'LOG IN', link: '/login' },
    // { label: 'JOIN', link: '/join' },
  ];

  ngOnInit(): void {
    this.themeService.theme$.subscribe((theme) => {
      this.isDarkTheme = theme === 'dark-theme';
      this.logoSrc = this.isDarkTheme
        ? '../../../assets/images/logo-square-white.png'
        : '../../../assets/images/logo-square.png';
    });
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  toggleTheme(): void {
    this.themeService.setTheme(document.body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme');
  }
}
