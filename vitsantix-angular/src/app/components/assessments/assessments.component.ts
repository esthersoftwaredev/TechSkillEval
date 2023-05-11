import { Component } from "@angular/core";
import { Assessment } from "src/app/models/assessment";

@Component({
	selector: "app-assessments",
	templateUrl: "./assessments.component.html",
	styleUrls: ["./assessments.component.scss"],
})
export class AssessmentsComponent {
	frontendSkills: Assessment[] = [
    { imageSrc: "", title: "HTML" },
    { imageSrc: "", title: "CSS" },
    { imageSrc: "", title: "Bootstrap" },
    { imageSrc: "", title: "Tailwind CSS" },
    { imageSrc: "", title: "SCSS" },
    { imageSrc: "", title: "JavaScript" },
    { imageSrc: "", title: "jQuery" },
    { imageSrc: "", title: "TypeScript" },
    { imageSrc: "", title: "Angular" },
    { imageSrc: "", title: "React" },
    { imageSrc: "", title: "Vue" },
  ];
}
