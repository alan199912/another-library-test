import { Component } from '@angular/core';
import {
  PANEL_SMALL_FEATURED_BAD_PRACTICES,
  PANEL_SMALL_FEATURED_BEST_PRACTICES
} from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-small-featured-overview',
  templateUrl: './panel-small-featured-overview.component.html',
  styleUrls: ['./panel-small-featured-overview.component.scss']
})
export class PanelSmallFeaturedOverviewComponent {
  public bestPractices = PANEL_SMALL_FEATURED_BEST_PRACTICES;
  public badPractices = PANEL_SMALL_FEATURED_BAD_PRACTICES;
}
