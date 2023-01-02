import { Component } from '@angular/core';
import { COLLAPSE_BAD_PRACTICES, COLLAPSE_BEST_PRACTIVES } from 'src/app/constants/collapse.constants';

@Component({
  selector: 'app-collapse-simple-overview',
  templateUrl: './collapse-simple-overview.component.html',
  styleUrls: ['./collapse-simple-overview.component.scss']
})
export class CollapseSimpleOverviewComponent {
  public bestPractices = COLLAPSE_BEST_PRACTIVES;
  public badPractices = COLLAPSE_BAD_PRACTICES;
}
