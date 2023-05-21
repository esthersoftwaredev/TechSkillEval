import {
	Component,
	ElementRef,
	QueryList,
	ViewChildren,
	OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Assessment } from "src/app/models/assessment";
import { AssessmentService } from "src/app/services/assessment.service";

@Component({
	selector: "app-assessments",
	templateUrl: "./assessments.component.html",
	styleUrls: ["./assessments.component.scss"],
})
export class AssessmentsComponent implements OnInit {
	hoverFlags: { [key: string]: { [key: string]: boolean } } = {};
	form!: FormGroup;

  frontendSkills: Assessment[] = [];

	constructor(private formBuilder: FormBuilder, private assessmentService: AssessmentService) {}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			selectedValue: null,
		});
    this.assessmentService.getAssessments().subscribe(data => {
      this.frontendSkills = data;
    });
	}



	// frontendSkills: Assessment[] = [
  //   { icon: "html5", bgrColor: "#f38942", title: "HTML" },
  //   {
  //     icon: "css3",
  //     bgrColor: "#349edc",
  //     title: "CSS",
  //     hasOptions: true,
  //     options: [
  //       { icon: "sass", bgrColor: "#cf649a", title: "SCSS" }
  //     ],
  //   },
  //   {
  //     icon: "bootstrap",
  //     bgrColor: "#513a75",
  //     title: "Bootstrap",
  //     hasOptions: true,
  //     options: [
  //       { icon: "tailwindcss", bgrColor: "#19b3ba", title: "Tailwind CSS" }
  //     ],
  //   },
  //   { icon: "jquery", bgrColor: "#193556", title: "jQuery" },
  //   {
  //     icon: "javascript",
  //     bgrColor: "#f0c022",
  //     title: "JavaScript",
  //     hasOptions: true,
  //     options: [
  //       { icon: "typescript", bgrColor: "#2f74c0", title: "TypeScript" }
  //     ],
  //   },
  //   {
  //     icon: "angular",
  //     bgrColor: "#de0031",
  //     title: "Angular",
  //     hasOptions: true,
  //     options: [
  //       { icon: "react", bgrColor: "#4cbad8", title: "React" },
  //       { icon: "vue", bgrColor: "#41b883", title: "Vue" },
  //       { icon: "svelte", bgrColor: "#ff3e00", title: "Svelte" },
  //     ],
  //   },
  // ];

  meanStackSkills: Assessment[] = [
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
      icon: "angular",
      bgrColor: "#de0031",
      title: "Angular",
    },
    { icon: "node", bgrColor: "#3b7f3a", title: "nodeJS" },
		{ icon: "mongodb", bgrColor: "#001e2b", title: "MongoDB" },
  ];

  mernStackSkills: Assessment[] = [
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
			icon: "react",
			bgrColor: "#4cbad8",
			title: "React",
		},
    { icon: "node", bgrColor: "#3b7f3a", title: "nodeJS" },
		{ icon: "mongodb", bgrColor: "#001e2b", title: "MongoDB" },
  ];


	backendSkills: Assessment[] = [
		{
	    icon: "node",
      bgrColor: "#3b7f3a",
      title: "NodeJS",
      hasOptions: true,
      options: [
        { icon: "python", bgrColor: "#356895", title: "Python" },
        { icon: "java", bgrColor: "#131f3f", title: "Java" },
        { icon: "go", bgrColor: "#67d7e1", title: "Go" },
        { icon: "csharp", bgrColor: "#92458c", title: "C#" },
      ],
	  },
		{
	    icon: "php",
      bgrColor: "#4b568c",
      title: "PHP",
      hasOptions: true,
      options: [
        { icon: "ruby", bgrColor: "#eb5745", title: "Ruby" },
        { icon: "cplusplus", bgrColor: "#659bd3", title: "C++" },
      ],
	  },
		{ icon: "django", bgrColor: "#092e20", title: "Django" },
		{ icon: "dot-net", bgrColor: "#6d409d", title: ".NET" },
		{
			icon: "mongodb",
			bgrColor: "#001e2b",
			title: "MongoDB",
		},
	];

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
