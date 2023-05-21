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
  hoverFlags: { [key: string]: boolean } = {};
	form!: FormGroup;

	frontendSkills: Assessment[] = [];
	meanStackSkills: Assessment[] = [];
	mernStackSkills: Assessment[] = [];
	backendSkills: Assessment[] = [];

	constructor(
		private formBuilder: FormBuilder,
		private assessmentService: AssessmentService
	) {}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			selectedValue: null,
		});
		this.assessmentService.getFeAssessments().subscribe((data) => {
			this.frontendSkills = data;
		});
		this.assessmentService.getMeanAssessments().subscribe((data) => {
			this.meanStackSkills = data;
		});
		this.assessmentService.getMernAssessments().subscribe((data) => {
			this.mernStackSkills = data;
		});
		this.assessmentService.getBackendAssessments().subscribe((data) => {
			this.backendSkills = data;
		});
	}


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

	onButtonMouseEnter(i: number, buttonType: string, carouselType: string) {
    this.hoverFlags[`${carouselType}-${i}-${buttonType}`] = true;
  }

  onButtonMouseLeave(i: number, buttonType: string, carouselType: string) {
    this.hoverFlags[`${carouselType}-${i}-${buttonType}`] = false;
  }
}
