import { Component } from "@angular/core";
import { Assessment } from "src/app/models/assessment";

@Component({
	selector: "app-assessments",
	templateUrl: "./assessments.component.html",
	styleUrls: ["./assessments.component.scss"],
})
export class AssessmentsComponent {
	frontendSkills: Assessment[] = [
    { icon: "html5", bgrColor: "#349edc", title: "HTML" },
    { icon: "css3", bgrColor: "#f06529", title: "CSS" },
    { icon: "", bgrColor: "#f06529", title: "Bootstrap" },
    { icon: "", bgrColor: "#f06529", title: "Tailwind CSS" },
    { icon: "", bgrColor: "#f06529", title: "SCSS" },
    { icon: "", bgrColor: "#f06529", title: "JavaScript" },
    { icon: "", bgrColor: "#f06529", title: "jQuery" },
    { icon: "", bgrColor: "#f06529", title: "TypeScript" },
    { icon: "", bgrColor: "#f06529", title: "Angular" },
    { icon: "", bgrColor: "#f06529", title: "React" },
    { icon: "", bgrColor: "#f06529", title: "Vue" },
  ];
}
