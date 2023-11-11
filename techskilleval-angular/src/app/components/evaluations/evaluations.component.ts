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
	selector: "app-evaluations",
	templateUrl: "./evaluations.component.html",
	styleUrls: ["./evaluations.component.scss"],
})
export class EvaluationsComponent implements OnInit {
  hoverFlags: { [key: string]: boolean } = {};
	form!: FormGroup;

	frontendSkills: Assessment[] = [];
	meanStackSkills: Assessment[] = [];
	mernStackSkills: Assessment[] = [];
	backendSkills: Assessment[] = [];
	fullStackSkills: Assessment[] = [];

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
		this.assessmentService.getFullStackAssessments().subscribe((data) => {
			this.fullStackSkills = data;
		});
	}

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
