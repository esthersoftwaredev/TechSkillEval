import { Component } from "@angular/core";
import { FqaPanel } from "src/app/models/fqa-panel";

@Component({
	selector: "app-fqa",
	templateUrl: "./fqa.component.html",
	styleUrls: ["./fqa.component.scss"],
})
export class FqaComponent {
	fqaPanel: FqaPanel[] = [
		{
			question: "What is VITSANTIX?",
			answer: "VITSANTIX is an independent platform providing video-based technical skills assessments for developers and employers. We are committed to delivering comprehensive and unbiased evaluations of technical skills through video assessments, ensuring an authentic and accurate evaluation of a candidate's abilities.",
		},
		{
			question: "How does VITSANTIX work?",
			answer: "Developers and employers can sign up on our platform to access our suite of services tailored to their needs. Developers will undergo video-based assessments conducted by experienced assessors, who are either skilled developers with a proven track record or newer developers who have become assessors after completing the related specializations offered by VITSANTIX. These assessments are designed to accurately evaluate a developer's skill set in a fair and unbiased manner.",
      answerMore: "Upon successfully completing the assessment, developers will receive verified certificate that can be showcased to any company of their choosing, demonstrating their technical abilities and expertise. Additionally, if they wish to, they can apply to become assessors at VITSANTIX, further expanding their professional opportunities and contributing to the fair evaluation of other developers' skills.",
		},
		{
			question: "How is VITSANTIX different than other platforms?",
			answer: "VITSANTIX is an independent platform focused on video-based assessments with real human interaction. We prioritize a fair and unbiased evaluation process while ensuring a comfortable and relaxed environment for developers. Our independence guarantees that the assessment results are not influenced by any ulterior motives.",
		},
		{
			question: "Can AI replace the video-based ITSA that we offer?",
			answer: "No, AI cannot effectively conduct the kind of in-depth, video-based assessments we provide, which call for human intuition, empathy, and understanding. By emphasizing the importance of human interaction in our assessment process, we are fostering an environment that values and supports human expertise and connection.",
		},
		{
			question: "How does VITSANTIX handle gatekeeping?",
			answer: "We stand firmly against gatekeeping practices that involve individuals determining who is capable of being a programmer based on factors such as their educational background or other arbitrary criteria. VITSANTIX is built on the principles of equality and opportunity, ensuring a fair and unbiased platform for all developers to showcase their skills and gain access to the opportunities they deserve.",
		},
		{
			question: "What types of assessments does VITSANTIX offer?",
			answer: "VITSANTIX offers two types of assessment categories to cater to various skill sets and career paths. The first category consists of individual technology assessments, which focus on specific programming languages and are divided into three levels – junior, mid-level, and senior. These assessments evaluate a developer's proficiency in a particular technology, offering targeted insights for both the developers and potential employers.",
			answerMore: "The second category includes specialization assessments, which cover comprehensive areas of expertise such as frontend development, MEAN stack development, MERN stack development, backend development, and full-stack development. These specializations involve a series of individual technology assessments that together form a complete skill set in a particular domain. In order to earn a certificate for a specialization, developers must successfully complete all the individual assessments within that specialization path.",
		},
		{
			question: "How do I join VITSANTIX as a developer or employer?",
			answer: "To join VITSANTIX, simply visit our website and sign up for an account. Once registered, you can access our range of assessments and services tailored to your needs, whether you are a developer seeking to showcase your skills or an employer searching for the right talent.",
		},
		{
			question: "What is the cost of using VITSANTIX?",
			answer: "VITSANTIX offers fair pricing for its services, ensuring that developers and employers have access to comprehensive and accurate assessments without breaking the bank. For more information on our pricing structure, please visit our website or contact our support team.",
		},
		{
			question: "How can I become an assessor for VITSANTIX?",
			answer: "If you're interested in becoming an assessor at VITSANTIX, there are two primary pathways to join our team. The first pathway is for established developers with proven, recognized experience, such as mentors, online instructors, or professionals with verifiable credentials. We value experienced professionals who share our commitment to providing fair and unbiased technical skills assessments.",
			answerMore: "The second pathway to become an assessor at VITSANTIX is by successfully completing the specializations on our platform. For those who achieve a minimum of mid-level proficiency in each technology assessment included in a specialization, they can join as an assessor for junior developers. Developers who have demonstrated senior-level expertise in their assessments can join as an assessor for all levels, further contributing to the fair evaluation of other developers' skills.",
		},
	];
}
