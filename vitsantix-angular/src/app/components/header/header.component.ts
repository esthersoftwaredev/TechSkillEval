import { Component, OnInit, HostListener } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";
import { NavItem } from "src/app/models/nav-item";
import { AuthService } from "src/app/services/auth.service";
import { Observable } from "rxjs";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	logoSrc = "../../../assets/images/logo-square-white.png";
	isDarkTheme = true;
	isLoggedIn$!: Observable<boolean>;

	isMenuOpen = false; // Track the menu state
	isMobileView = false; // Track whether the view is mobile or not

	// Listen for window resize events
	@HostListener("window:resize", ["$event"])
	onResize(event: any) {
		// Check if the screen width is less than or equal to 500px
		this.isMobileView = window.innerWidth <= 600;
	}

	constructor(
		private themeService: ThemeService,
		private authService: AuthService
	) {}

	navItems: NavItem[] = [
		{ label: "HOME", link: "/home" },
		{ label: "ITSAs", link: "/assessments" },
		{ label: "ABOUT", link: "/about" },
	];

	ngOnInit(): void {
		this.themeService.theme$.subscribe((theme) => {
			this.isDarkTheme = theme === "dark-theme";
			this.logoSrc = this.isDarkTheme
				? "../../../assets/images/logo-square-white.png"
				: "../../../assets/images/logo-square.png";
		});
		this.isLoggedIn$ = this.authService.authState$;
    this.isMobileView = window.innerWidth <= 600;
    this.isMenuOpen = !this.isMobileView;

    console.log('Initial isMobileView:', this.isMobileView);
    console.log('Initial isMenuOpen:', this.isMenuOpen);
	}

	toggleTheme(): void {
		this.themeService.setTheme(
			document.body.classList.contains("dark-theme")
				? "light-theme"
				: "dark-theme"
		);
	}

	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}

	logout(): void {
		this.authService.logout();
	}
}
