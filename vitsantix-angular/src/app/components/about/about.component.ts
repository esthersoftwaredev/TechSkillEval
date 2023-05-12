import { Component } from '@angular/core';
import { AboutPanel } from 'src/app/models/about-panel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutPanel: AboutPanel[] = [
    {
      title: 'OUR NAME',
      content:
        'The name "VITSANTIX" is a combination of the words "Video," representing our video-based assessment approach, and "ITSA," an abbreviation for Independent Technical Skills Assessment. Together, they symbolize our commitment to delivering a comprehensive and unbiased evaluation of technical skills through video assessments for both developers and employers seeking genuine and accurate evaluation of technical abilities.',
    },
    {
      title: 'WHAT WE DO',
      content: "VITSANTIX is your ultimate destination for video-based independent technical skills assessments. We cater to developers and employers alike, providing a comprehensive, modern, and reliable platform that accurately measures a developer's skill set. Our aim is to bridge the gap between employers and talented developers by offering a seamless assessment process that values authenticity, fairness, and human interaction.",
    },
    {
      title: 'INDEPENDENT TECHNICAL SKILLS ASSESSMENTS',
      content: "At VITSANTIX, we prioritize the performance and potential of each candidate through our independent technical skills assessments. Our platform operates independently, with no affiliation to hiring companies, managers, or teams, ensuring that our primary focus is on the candidate's abilities. This independence allows us to provide candidates with verified credentials that can be utilized at any company of their choosing. By remaining independent, we guarantee that our assessment results are unbiased and free from any ulterior motives. In many instances, candidates may face interviews with company personnel who have personal reasons to sabotage their chances, especially if they perceive the candidate as a threat to their own job security. We stand firmly against such practices and strive to create a fair assessment environment, shielding candidates from any undue influences that could jeopardize their opportunities for success.",
    },
    {
      title: 'STRESS-FREE INNOVATIVE TECH ASSESSMENTS',
      content: "At VITSANTIX, we understand the limitations of conventional platforms that restrict features and fail to provide an environment conducive to showcasing a developer's true abilities. We believe in moving away from outdated techniques and embracing a more modern and accurate approach to validate a developer's skills. In addition, we focus on removing the unnecessary pressure of a high-stakes interview, allowing developers to feel comfortable and relaxed. This enables them to perform at their best using the tools and environment they're most familiar with.",
    },
    {
      title: 'WE ARE ABSOLUTELY TIRED OF THE POINTLESS GATEKEEPING',
      content: "We stand firmly against gatekeeping in the tech industry, particularly when it involves individuals determining who is capable of being a programmer based on factors such as their educational background or other arbitrary criteria. This form of gatekeeping unfairly restricts access to opportunities and prevents people from working with technologies they are more than capable of handling. VITSANTIX is built on the principles of equality and opportunity, ensuring a fair and unbiased platform for all developers to showcase their skills and gain access to the opportunities they deserve, regardless of their background or previous experiences.",
    },
    {
      title: 'CREATING HUMAN JOBS THAT AI CANNOT REPLACE',
      content: "As many worry about the potential impact of AI on job availability, we at VITSANTIX are committed to creating opportunities for human jobs that AI cannot replace. No AI can effectively conduct the kind of in-depth, video-based assessments we provide, which call for human intuition, empathy, and understanding. By emphasizing the importance of human interaction in our assessment process, we are fostering an environment that values and supports human expertise and connection, while also embracing a modern and accurate approach to validating a developer's skills.",
    },
    {
      title: 'OUR CERTIFICATES',
      content: "In today's rapidly evolving landscape, AI advancements have simplified the process of passing exams and earning certificates through online courses, often without accurately evaluating one's abilities. To address this, VITSANTIX emphasizes video-based assessments featuring real human interaction. We issue certificates only after candidates have successfully undergone a thorough assessment conducted by a real person, ensuring a more genuine evaluation of their capabilities.",
    },

  ]


  goalsPanel: AboutPanel[] = [
    {
      title: 'Assemble a Global Team of Assessors',
      content:
        'We have a team of foundational Senior Web Developers with proven, long-term experience worldwide who conduct the initial assessments.',
    },
    {
      title: 'Create Tailored Assessments',
      content:
        'Each assessment is individually crafted by the assessor for the assessed, ensuring that specific questions and tasks remain unknown until the assessment. This approach eliminates the possibility of "preparing" for assessments, maintaining the focus on core skills and abilities.',
    },
    {
      title: 'Conduct Low-Pressure Assessments',
      content:
        'Assessments are carried out through video calls, typically lasting between 30 minutes and 1 hour, with no strict time restrictions. This approach allows developers to showcase their skills in a relaxed environment, free from the added pressure of being assessed by potential colleagues.',
    },
    {
      title: 'Balance Assessment Results',
      content:
        "We recognize that skill level expectations may vary between companies. Therefore, we strive to balance our assessment results by focusing on core, fundamental abilities that are universally required, along with additional qualities that indicate a developer's potential to succeed in their role.",
    },
    {
      title: 'Track Progress',
      content:
        "Developers can monitor their progress on their profile page, where completed assessments are marked or checked.",
    },
    {
      title: 'Offer Fair Pricing',
      content:
        "The assessment price is a flat rate that slightly increases with each level, ensuring accessibility for all developers.",
    },
    {
      title: 'Enable Developers to Become Assessors',
      content:
        "After completing an entire Assessment Path, developers can become assessors on our platform. Assessors must complete at least mid-level assessments to evaluate juniors and senior-level assessments to evaluate all developers.",
    },
  ]

}
