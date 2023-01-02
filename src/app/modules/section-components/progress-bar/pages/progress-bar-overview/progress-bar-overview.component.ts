import { Component } from '@angular/core';
import { PROGRESS_BAR_BEST_PRACTICES } from 'src/app/constants/progress-bar.constants';

@Component({
  selector: 'app-progress-bar-overview',
  templateUrl: './progress-bar-overview.component.html',
  styleUrls: ['./progress-bar-overview.component.scss']
})
export class ProgressBarOverviewComponent {
  public bestPractices = PROGRESS_BAR_BEST_PRACTICES;
}
