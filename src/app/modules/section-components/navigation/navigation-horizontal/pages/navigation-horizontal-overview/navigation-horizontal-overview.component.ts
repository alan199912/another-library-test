import { Component } from '@angular/core';
import {
  NAVIGATION_HORIZONTAL_BAD_PRACTICES,
  NAVIGATION_HORIZONTAL_BEST_PRACTICES
} from 'src/app/constants/navigation.constants';

@Component({
  selector: 'app-navigation-horizontal-overview',
  templateUrl: './navigation-horizontal-overview.component.html',
  styleUrls: ['./navigation-horizontal-overview.component.scss']
})
export class NavigationHorizontalOverviewComponent {
  public bestPractices = NAVIGATION_HORIZONTAL_BEST_PRACTICES;
  public badPractices = NAVIGATION_HORIZONTAL_BAD_PRACTICES;
}
