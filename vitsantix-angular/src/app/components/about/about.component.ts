import { Component } from '@angular/core';
import { OurGoalPanel } from 'src/app/models/our-goal-panel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  goalsPanel: OurGoalPanel[] = [
    {
      title: 'Assemble a Global Team of Assessors:',
      content:
        'We have a team of foundational Senior Web Developers with proven, long-term experience worldwide who conduct the initial assessments.',
    },
    {
      title: 'Create Tailored Assessments:',
      content:
        'Each assessment is individually crafted by the assessor for the assessed, ensuring that specific questions and tasks remain unknown until the assessment. This approach eliminates the possibility of "preparing" for assessments, maintaining the focus on core skills and abilities.',
    },
    {
      title: 'Conduct Low-Pressure Assessments:',
      content:
        'Assessments are carried out through video calls, typically lasting between 30 minutes and 1 hour, with no strict time restrictions. This approach allows developers to showcase their skills in a relaxed environment, free from the added pressure of being assessed by potential colleagues.',
    },
    {
      title: 'Balance Assessment Results:',
      content:
        "We recognize that skill level expectations may vary between companies. Therefore, we strive to balance our assessment results by focusing on core, fundamental abilities that are universally required, along with additional qualities that indicate a developer's potential to succeed in their role.",
    },
    {
      title: 'Track Progress:',
      content:
        "Developers can monitor their progress on their profile page, where completed assessments are marked or checked.",
    },
    {
      title: 'Offer Fair Pricing',
      content:
        "The assessment price is a flat rate that slightly increases with each level, ensuring accessibility for all developers.",
    },
    {
      title: 'Enable Developers to Become Assessors:',
      content:
        "After completing an entire Assessment Path, developers can become assessors on our platform. Assessors must complete at least mid-level assessments to evaluate juniors and senior-level assessments to evaluate all developers.",
    },
  ]

}
