import { Component } from '@angular/core';
import {
  PANEL_LARGE_FEATURED_BAD_PRACTICES,
  PANEL_LARGE_FEATURED_BEST_PRACTICES
} from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-large-featured-overview',
  templateUrl: './panel-large-featured-overview.component.html',
  styleUrls: ['./panel-large-featured-overview.component.scss']
})
export class PanelLargeFeaturedOverviewComponent {
  public bestPractices = PANEL_LARGE_FEATURED_BEST_PRACTICES;
  public badPractices = PANEL_LARGE_FEATURED_BAD_PRACTICES;
}
