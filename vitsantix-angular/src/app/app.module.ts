import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { AssessmentsComponent } from "./components/assessments/assessments.component";
import { AboutComponent } from "./components/about/about.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		AboutComponent,
		AssessmentsComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
    HttpClientModule,
		MatToolbarModule,
		MatSlideToggleModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,

		MatTooltipModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	) {
		this.registerCustomIcons();
	}

	registerCustomIcons(): void {
		this.matIconRegistry.addSvgIcon(
			"html5",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/html5.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"css3",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/css3.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"bootstrap",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/bootstrap.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"sass",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/sass.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"javascript",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/javascript.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"jquery",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/jquery.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"typescript",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/typescript.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"angular",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/angular.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"react",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/react.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"vue",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/vue.svg")
		);
	}
}
