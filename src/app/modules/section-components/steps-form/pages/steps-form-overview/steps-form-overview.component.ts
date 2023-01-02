import { Component } from '@angular/core';
import { STEPS_FORM_BAD_PRACTICES, STEPS_FORM_BEST_PRACTICES } from 'src/app/constants/steps-form.constants';

@Component({
  selector: 'app-steps-form-overview',
  templateUrl: './steps-form-overview.component.html',
  styleUrls: ['./steps-form-overview.component.scss']
})
export class StepsFormOverviewComponent {
  public bestPractices = STEPS_FORM_BEST_PRACTICES;
  public badPractices = STEPS_FORM_BAD_PRACTICES;
}
