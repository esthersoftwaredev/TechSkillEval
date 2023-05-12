import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { AssessmentsComponent } from "./components/assessments/assessments.component";
import { AboutComponent } from "./components/about/about.component";


import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FqaComponent } from './components/fqa/fqa.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		AboutComponent,
		AssessmentsComponent,
  FqaComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
    HttpClientModule,
		AppRoutingModule,
    ReactiveFormsModule,
		MatToolbarModule,
		MatTooltipModule,
    MatExpansionModule,
		MatSlideToggleModule,
		MatCardModule,
    MatListModule,
		MatButtonModule,
		MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule
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
			"tailwindcss",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/tailwindcss.svg")
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
		this.matIconRegistry.addSvgIcon(
			"svelte",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/svelte.svg")
		);
    this.matIconRegistry.addSvgIcon(
			"jquery",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/jquery.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"node",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/node.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"python",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/python.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"django",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/django.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"java",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/java.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"go",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/go.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"csharp",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/csharp.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"cplusplus",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/cplusplus.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"dot-net",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/dot-net.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"ruby",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/ruby.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"php",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/php.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"mongodb",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/mongodb.svg")
		);
	}
}
