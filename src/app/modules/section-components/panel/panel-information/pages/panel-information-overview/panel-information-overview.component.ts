import { Component } from '@angular/core';
import { PANEL_INFORMATION_BAD_PRACTICES, PANEL_INFORMATION_BEST_PRACTICES } from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-information-overview',
  templateUrl: './panel-information-overview.component.html',
  styleUrls: ['./panel-information-overview.component.scss']
})
export class PanelInformationOverviewComponent {
  public bestPractices = PANEL_INFORMATION_BEST_PRACTICES;
  public badPractices = PANEL_INFORMATION_BAD_PRACTICES;
}
