import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import { PANEL_LARGE_FEATURED_DATA_SOURCE } from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-large-featured-api',
  templateUrl: './panel-large-featured-api.component.html',
  styleUrls: ['./panel-large-featured-api.component.scss']
})
export class PanelLargeFeaturedApiComponent {
  public dataSource = PANEL_LARGE_FEATURED_DATA_SOURCE;
  public columns = COLUMNS;
}
