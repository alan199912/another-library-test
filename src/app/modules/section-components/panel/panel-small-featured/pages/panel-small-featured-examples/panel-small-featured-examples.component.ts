import { Component } from '@angular/core';
import {
  PANEL_SMALL_WITH_BUTTONS_EXAMPLE_HTML,
  PANEL_SMALL_WITH_LINK_EXAMPLE_HTML
} from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-small-featured-examples',
  templateUrl: './panel-small-featured-examples.component.html',
  styleUrls: ['./panel-small-featured-examples.component.scss']
})
export class PanelSmallFeaturedExamplesComponent {
  public examplePanelSmallWithButtonslHTML = PANEL_SMALL_WITH_BUTTONS_EXAMPLE_HTML;
  public examplePanelSmallWithLinkslHTM = PANEL_SMALL_WITH_LINK_EXAMPLE_HTML;
}
