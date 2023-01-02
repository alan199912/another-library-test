import { Component } from '@angular/core';
import {
  PANEL_LARGE_IMAGE_HORIZONTAL_DOWNLOAD_BUTTON_EXAMPLE_HTML,
  PANEL_LARGE_IMAGE_HORIZONTAL_DOWNLOAD_LINK_EXAMPLE_HTML,
  PANEL_LARGE_IMAGE_HORIZONTAL_EXAMPLE_HTML,
  PANEL_LARGE_IMAGE_VERTICAL_EXAMPLE_HTML,
  PANEL_LARGE_VIDEO_HORIZONTAL_EXAMPLE_HTML,
  PANEL_LARGE_VIDEO_VERTICAL_EXAMPLE_HTML
} from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-large-featured-examples',
  templateUrl: './panel-large-featured-examples.component.html',
  styleUrls: ['./panel-large-featured-examples.component.scss']
})
export class PanelLargeFeaturedExamplesComponent {
  public examplePanelLargeImageHorizontalHTML = PANEL_LARGE_IMAGE_HORIZONTAL_EXAMPLE_HTML;
  public examplePanelLargeImageHorizontalDownloadButtonHTML = PANEL_LARGE_IMAGE_HORIZONTAL_DOWNLOAD_BUTTON_EXAMPLE_HTML;
  public examplePanelLargeImageHorizontalDownloadLinkHTML = PANEL_LARGE_IMAGE_HORIZONTAL_DOWNLOAD_LINK_EXAMPLE_HTML;
  public examplePanelLargeVideoHorizontalHTML = PANEL_LARGE_VIDEO_HORIZONTAL_EXAMPLE_HTML;
  public examplePanelLargeImageVerticalHTML = PANEL_LARGE_IMAGE_VERTICAL_EXAMPLE_HTML;
  public examplePanelLargeVideoVerticalHTML = PANEL_LARGE_VIDEO_VERTICAL_EXAMPLE_HTML;
}
