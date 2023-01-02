import { Component } from '@angular/core';
import {
  PANEL_INFORMATION_EXAMPLE_HTML,
  PANEL_INFORMATION_EXAMPLE_TS,
  PANEL_INFORMATION_LIST
} from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-information-examples',
  templateUrl: './panel-information-examples.component.html',
  styleUrls: ['./panel-information-examples.component.scss']
})
export class PanelInformationExamplesComponent {
  public panelInformationList = PANEL_INFORMATION_LIST;
  public examplePanelInformationHTML = PANEL_INFORMATION_EXAMPLE_HTML;
  public examplePanelInformationTS = PANEL_INFORMATION_EXAMPLE_TS;
}
