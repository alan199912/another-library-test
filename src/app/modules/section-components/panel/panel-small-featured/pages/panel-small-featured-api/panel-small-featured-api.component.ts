import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import { PANEL_SMALL_FEATURED_DATA_SOURCE } from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-small-featured-api',
  templateUrl: './panel-small-featured-api.component.html',
  styleUrls: ['./panel-small-featured-api.component.scss']
})
export class PanelSmallFeaturedApiComponent {
  public dataSource = PANEL_SMALL_FEATURED_DATA_SOURCE;
  public columns = COLUMNS;
}
