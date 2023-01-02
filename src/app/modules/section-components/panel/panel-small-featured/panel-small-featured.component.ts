import { Component } from '@angular/core';
import { PANEL_SMALL_FEATURED_NAVIGATION } from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-small-featured',
  templateUrl: './panel-small-featured.component.html',
  styleUrls: ['./panel-small-featured.component.scss']
})
export class PanelSmallFeaturedComponent {
  public navigation = PANEL_SMALL_FEATURED_NAVIGATION;
}
