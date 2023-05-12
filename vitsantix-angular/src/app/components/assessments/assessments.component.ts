import {
	Component,
	ElementRef,
	QueryList,
	ViewChildren,
	OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Assessment } from "src/app/models/assessment";

@Component({
	selector: "app-assessments",
	templateUrl: "./assessments.component.html",
	styleUrls: ["./assessments.component.scss"],
})
export class AssessmentsComponent implements OnInit {
	hoverFlags: { [key: string]: { [key: string]: boolean } } = {};
	form!: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			selectedValue: null,
		});
	}

	frontendSkills: Assessment[] = [
    { icon: "html5", bgrColor: "#f38942", title: "HTML" },
    {
      icon: "css3",
      bgrColor: "#349edc",
      title: "CSS",
      hasOptions: true,
      options: [
        { icon: "sass", bgrColor: "#cf649a", title: "SCSS" }
      ],
    },
    {
      icon: "bootstrap",
      bgrColor: "#513a75",
      title: "Bootstrap",
      hasOptions: true,
      options: [
        { icon: "tailwindcss", bgrColor: "#19b3ba", title: "Tailwind CSS" }
      ],
    },
    { icon: "jquery", bgrColor: "#193556", title: "jQuery" },
    {
      icon: "javascript",
      bgrColor: "#f0c022",
      title: "JavaScript",
      hasOptions: true,
      options: [
        { icon: "typescript", bgrColor: "#2f74c0", title: "TypeScript" }
      ],
    },
    {
      icon: "angular",
      bgrColor: "#de0031",
      title: "Angular",
      hasOptions: true,
      options: [
        { icon: "react", bgrColor: "#4cbad8", title: "React" },
        { icon: "vue", bgrColor: "#41b883", title: "Vue" },
        { icon: "svelte", bgrColor: "#ff3e00", title: "Svelte" },
      ],
    },
  ];

	// 	{
	// 		icon: "angular",
	// 		secondIcon: "react",
	// 		thirdIcon: "vue",
	// 		forthIcon: "svelte",
	// 		bgrColor: "#de0031",
	// 		secondBgrColor: "#4cbad8",
	// 		thirdBgrColor: "#41b883",
	// 		forthBgrColor: "#ff3e00",
	// 		title: "Angular",
	// 		secondTitle: "React",
	// 		thirdTitle: "Vue",
	// 		forthTitle: "Svelte",
	// 	},
	// ];

	// meanStackSkills: Assessment[] = [
	// 	{ icon: "html5", bgrColor: "#f38942", title: "HTML" },
	// 	{
	// 		icon: "css3",
	// 		secondIcon: "sass",
	// 		bgrColor: "#349edc",
	// 		secondBgrColor: "#cf649a",
	// 		title: "CSS",
	// 		secondTitle: "SCSS",
	// 	},
	// 	{
	// 		icon: "angular",
	// 		bgrColor: "#de0031",
	// 		title: "Angular",
	// 	},
	// 	{ icon: "node", bgrColor: "#3b7f3a", title: "nodeJS" },
	// 	{ icon: "mongodb", bgrColor: "#001e2b", title: "MongoDB" },
	// ];

	// mernStackSkills: Assessment[] = [
	// 	{ icon: "html5", bgrColor: "#f38942", title: "HTML" },
	// 	{
	// 		icon: "css3",
	// 		secondIcon: "sass",
	// 		bgrColor: "#349edc",
	// 		secondBgrColor: "#cf649a",
	// 		title: "CSS",
	// 		secondTitle: "SCSS",
	// 	},
	// 	{
	// 		icon: "react",
	// 		bgrColor: "#4cbad8",
	// 		title: "React",
	// 	},
	// 	{
	// 		icon: "node",
	// 		bgrColor: "#3b7f3a",
	// 		title: "nodeJS",
	// 	},
	// 	{
	// 		icon: "mongodb",
	// 		bgrColor: "#001e2b",
	// 		title: "MongoDB",
	// 	},
	// ];

	// backendSkills: Assessment[] = [
	// 	{
	//     icon: "node",
	//     secondIcon: "python",
	//     thirdIcon: "java",
	//     forthIcon: "go",
	//     fifthIcon: "csharp",
	//     bgrColor: "#3b7f3a",
	//     secondBgrColor: "#356895",
	//     thirdBgrColor: "#131f3f",
	//     forthBgrColor: "#67d7e1",
	//     fifthBgrColor: "#92458c",
	//     title: "nodeJS",
	//     secondTitle: "Python",
	//     thirdTitle: "Java",
	//     forthTitle: "Go",
	//     fifthTitle: "C#",
	//   },
	// 	{ icon: "django", bgrColor: "#092e20", title: "Django" },
	// 	{ icon: "cplusplus", bgrColor: "#659bd3", title: "C++" },
	// 	{ icon: "dot-net", bgrColor: "#6d409d", title: ".NET" },
	// 	{ icon: "php", bgrColor: "#4b568c", title: "PHP" },
	// 	{ icon: "ruby", bgrColor: "#eb5745", title: "Ruby" },
	// 	{
	// 		icon: "mongodb",
	// 		bgrColor: "#001e2b",
	// 		title: "MongoDB",
	// 	},
	// ];

	// fullstackSkills: Assessment[] = [
	// 	{ icon: "node", bgrColor: "#3b7f3a", title: "nodeJS" },
	// 	{ icon: "python", bgrColor: "#356895", title: "Python" },
	// 	{ icon: "django", bgrColor: "#092e20", title: "Django" },
	// 	{ icon: "java", bgrColor: "#131f3f", title: "Java" },
	// 	{ icon: "go", bgrColor: "#67d7e1", title: "Go" },
	// 	{ icon: "csharp", bgrColor: "#92458c", title: "C#" },
	// 	{ icon: "cplusplus", bgrColor: "#659bd3", title: "C++" },
	// 	{ icon: "dot-net", bgrColor: "#6d409d", title: ".NET" },
	// 	{ icon: "php", bgrColor: "#4b568c", title: "PHP" },
	// 	{ icon: "ruby", bgrColor: "#eb5745", title: "Ruby" },
	// ];

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
