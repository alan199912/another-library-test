import { Component } from '@angular/core';
import { OPTION_BAD_PRACTICES, OPTION_BEST_PRACTICES } from 'src/app/constants/option.constants';

@Component({
  selector: 'app-option-overview',
  templateUrl: './option-overview.component.html',
  styleUrls: ['./option-overview.component.scss']
})
export class OptionOverviewComponent {
  public bestPractices = OPTION_BEST_PRACTICES;

  public badPractices = OPTION_BAD_PRACTICES;
}
