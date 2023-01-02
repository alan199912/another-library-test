import { Component } from '@angular/core';
import { COLLAPSE_BAD_PRACTICES, COLLAPSE_BEST_PRACTIVES } from 'src/app/constants/collapse.constants';

@Component({
  selector: 'app-collapse-info-overview',
  templateUrl: './collapse-info-overview.component.html',
  styleUrls: ['./collapse-info-overview.component.scss']
})
export class CollapseInfoOverviewComponent {
  public bestPractices = COLLAPSE_BEST_PRACTIVES;
  public badPractices = COLLAPSE_BAD_PRACTICES;
}
