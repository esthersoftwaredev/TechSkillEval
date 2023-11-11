import {
	Component,
	ElementRef,
	QueryList,
	ViewChildren,
	OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Evaluation } from "src/app/models/evaluation";
import { EvaluationService } from "src/app/services/evaluation.service";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "app-evaluations",
	templateUrl: "./evaluations.component.html",
	styleUrls: ["./evaluations.component.scss"],
})
export class EvaluationsComponent implements OnInit {
  hoverFlags: { [key: string]: boolean } = {};
	form!: FormGroup;

	frontendSkills: Evaluation[] = [];
	meanStackSkills: Evaluation[] = [];
	mernStackSkills: Evaluation[] = [];
	backendSkills: Evaluation[] = [];
	fullStackSkills: Evaluation[] = [];

	constructor(
		private formBuilder: FormBuilder,
		private evaluationService: EvaluationService,
    private httpClient: HttpClient
	) {}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			selectedValue: null,
		});
		// this.evaluationService.getFeEvaluations().subscribe((data) => {
		// 	this.frontendSkills = data;
		// });
		// this.evaluationService.getMeanEvaluations().subscribe((data) => {
		// 	this.meanStackSkills = data;
		// });
		// this.evaluationService.getMernEvaluations().subscribe((data) => {
		// 	this.mernStackSkills = data;
		// });
		// this.evaluationService.getBackendEvaluations().subscribe((data) => {
		// 	this.backendSkills = data;
		// });
		// this.evaluationService.getFullStackEvaluations().subscribe((data) => {
		// 	this.fullStackSkills = data;
		// });

    this.httpClient.get<{ [key: string]: Evaluation[] }>("assets/evaluations.json").subscribe((data) => {
      this.frontendSkills = data['frontend'] || [];
      this.meanStackSkills = data['mean'] || [];
      this.mernStackSkills = data['mern'] || [];
      this.backendSkills = data['backend'] || [];
      this.fullStackSkills = data['fullstack'] || [];
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
