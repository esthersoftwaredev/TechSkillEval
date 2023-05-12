import { Component, ElementRef, QueryList, ViewChildren } from "@angular/core";
import { Assessment } from "src/app/models/assessment";

@Component({
	selector: "app-assessments",
	templateUrl: "./assessments.component.html",
	styleUrls: ["./assessments.component.scss"],
})
export class AssessmentsComponent {
	hoverFlags: { [key: string]: { [key: string]: boolean } } = {};
	selectedValue: string | null = null;

	frontendSkills: Assessment[] = [
		{ icon: "html5", bgrColor: "#f38942", title: "HTML" },
		{
			icon: "css3",
			secondIcon: "sass",
			bgrColor: "#349edc",
			secondBgrColor: "#cf649a",
			title: "CSS",
			secondTitle: "SCSS",
		},
		{
			icon: "bootstrap",
			secondIcon: "tailwindcss",
			bgrColor: "#513a75",
			secondBgrColor: "#19b3ba",
			title: "Bootstrap",
			secondTitle: "Tailwind CSS",
		},
    { icon: "jquery", bgrColor: "#193556", title: "jQuery" },
		{
			icon: "javascript",
			secondIcon: "typescript",
			bgrColor: "#f0c022",
			secondBgrColor: "#2f74c0",
			title: "JavaScript",
			secondTitle: "TypeScript",
		},
		{
			icon: "angular",
			secondIcon: "react",
			thirdIcon: "vue",
			bgrColor: "#de0031",
			secondBgrColor: "#4cbad8",
			thirdBgrColor: "#41b883",
			title: "Angular",
			secondTitle: "React",
			thirdTitle: "Vue",
		},
		{ icon: "svelte", bgrColor: "#ff3e00", title: "Svelte" },
	];

	meanStackSkills: Assessment[] = [
		{ icon: "node", bgrColor: "#3b7f3a", title: "nodeJS" },
		{ icon: "python", bgrColor: "#356895", title: "Python" },
		{ icon: "django", bgrColor: "#092e20", title: "Django" },
		{ icon: "java", bgrColor: "#131f3f", title: "Java" },
		{ icon: "go", bgrColor: "#67d7e1", title: "Go" },
		{ icon: "csharp", bgrColor: "#92458c", title: "C#" },
		{ icon: "cplusplus", bgrColor: "#659bd3", title: "C++" },
		{ icon: "dot-net", bgrColor: "#6d409d", title: ".NET" },
		{ icon: "php", bgrColor: "#4b568c", title: "PHP" },
		{ icon: "ruby", bgrColor: "#eb5745", title: "Ruby" },
	];

	mernStackSkills: Assessment[] = [
		{ icon: "node", bgrColor: "#3b7f3a", title: "nodeJS" },
		{ icon: "python", bgrColor: "#356895", title: "Python" },
		{ icon: "django", bgrColor: "#092e20", title: "Django" },
		{ icon: "java", bgrColor: "#131f3f", title: "Java" },
		{ icon: "go", bgrColor: "#67d7e1", title: "Go" },
		{ icon: "csharp", bgrColor: "#92458c", title: "C#" },
		{ icon: "cplusplus", bgrColor: "#659bd3", title: "C++" },
		{ icon: "dot-net", bgrColor: "#6d409d", title: ".NET" },
		{ icon: "php", bgrColor: "#4b568c", title: "PHP" },
		{ icon: "ruby", bgrColor: "#eb5745", title: "Ruby" },
	];

	backendSkills: Assessment[] = [
		{ icon: "node", bgrColor: "#3b7f3a", title: "nodeJS" },
		{ icon: "python", bgrColor: "#356895", title: "Python" },
		{ icon: "django", bgrColor: "#092e20", title: "Django" },
		{ icon: "java", bgrColor: "#131f3f", title: "Java" },
		{ icon: "go", bgrColor: "#67d7e1", title: "Go" },
		{ icon: "csharp", bgrColor: "#92458c", title: "C#" },
		{ icon: "cplusplus", bgrColor: "#659bd3", title: "C++" },
		{ icon: "dot-net", bgrColor: "#6d409d", title: ".NET" },
		{ icon: "php", bgrColor: "#4b568c", title: "PHP" },
		{ icon: "ruby", bgrColor: "#eb5745", title: "Ruby" },
	];

	fullstackSkills: Assessment[] = [
		{ icon: "node", bgrColor: "#3b7f3a", title: "nodeJS" },
		{ icon: "python", bgrColor: "#356895", title: "Python" },
		{ icon: "django", bgrColor: "#092e20", title: "Django" },
		{ icon: "java", bgrColor: "#131f3f", title: "Java" },
		{ icon: "go", bgrColor: "#67d7e1", title: "Go" },
		{ icon: "csharp", bgrColor: "#92458c", title: "C#" },
		{ icon: "cplusplus", bgrColor: "#659bd3", title: "C++" },
		{ icon: "dot-net", bgrColor: "#6d409d", title: ".NET" },
		{ icon: "php", bgrColor: "#4b568c", title: "PHP" },
		{ icon: "ruby", bgrColor: "#eb5745", title: "Ruby" },
	];

	@ViewChildren("cardsWrapper", { read: ElementRef })
	cardsWrappers!: QueryList<ElementRef>;

	scroll(direction: number, carouselIndex: number): void {
		const cardsWrapperElement = this.cardsWrappers.toArray()[carouselIndex]
			.nativeElement as HTMLElement;
		const cardWidth = cardsWrapperElement.children[0].clientWidth;

		cardsWrapperElement.scrollBy({
			left: cardWidth * direction,
			behavior: "smooth",
		});
	}

	onButtonMouseEnter(cardIndex: number, buttonType: string) {
		if (!this.hoverFlags[cardIndex]) {
			this.hoverFlags[cardIndex] = {};
		}
		this.hoverFlags[cardIndex][buttonType] = true;
	}

	onButtonMouseLeave(cardIndex: number, buttonType: string) {
		this.hoverFlags[cardIndex][buttonType] = false;
	}
}
