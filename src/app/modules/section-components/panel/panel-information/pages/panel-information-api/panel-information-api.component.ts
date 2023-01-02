import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  PANEL_INFORMATION_DATA_SOURCE,
  PANEL_INFORMATION_INTERFACE,
  PANEL_INFORMATION_INTERFACE_DATA_SOURCE
} from 'src/app/constants/panel.constants';

@Component({
  selector: 'app-panel-information-api',
  templateUrl: './panel-information-api.component.html',
  styleUrls: ['./panel-information-api.component.scss']
})
export class PanelInformationApiComponent {
  public dataSource = PANEL_INFORMATION_DATA_SOURCE;
  public columns = COLUMNS;
  public exampleIterfacePanelInformation = PANEL_INFORMATION_INTERFACE;
  public dataSourcePanelInformationInterface = PANEL_INFORMATION_INTERFACE_DATA_SOURCE;
}
