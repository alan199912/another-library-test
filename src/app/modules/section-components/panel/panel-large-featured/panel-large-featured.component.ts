import { Component } from '@angular/core';
import { PANEL_LARGE_FEATURED_NAVIGATION } from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-large-featured',
  templateUrl: './panel-large-featured.component.html',
  styleUrls: ['./panel-large-featured.component.scss']
})
export class PanelLargeFeaturedComponent {
  public navigation = PANEL_LARGE_FEATURED_NAVIGATION;
}
