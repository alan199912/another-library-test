import { Component } from '@angular/core';
import {
  NAVIGATION_VERTICAL_BAD_PRACTICES,
  NAVIGATION_VERTICAL_BEST_PRACTICES
} from 'src/app/constants/navigation.constants';

@Component({
  selector: 'app-navigation-vertical-overview',
  templateUrl: './navigation-vertical-overview.component.html',
  styleUrls: ['./navigation-vertical-overview.component.scss']
})
export class NavigationVerticalOverviewComponent {
  public bestPractices = NAVIGATION_VERTICAL_BEST_PRACTICES;
  public badPractices = NAVIGATION_VERTICAL_BAD_PRACTICES;
}
