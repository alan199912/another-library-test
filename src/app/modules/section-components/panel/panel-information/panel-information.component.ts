import { Component } from '@angular/core';
import { PANEL_INFORMATION_NAVIGATION } from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-information',
  templateUrl: './panel-information.component.html',
  styleUrls: ['./panel-information.component.scss']
})
export class PanelInformationComponent {
  public navigation = PANEL_INFORMATION_NAVIGATION;
}
