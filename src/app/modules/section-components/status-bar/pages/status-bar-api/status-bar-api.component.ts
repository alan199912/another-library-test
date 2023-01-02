import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  STATUS_BAR_DATA_SOURCE_INTERFACE,
  STATUS_BAR_DATA_SOURCE_METHODS,
  STATUS_BAR_DATA_SOURCE_PROPERTIES,
  STATUS_BAR_INTERFACE
} from 'src/app/constants/status-bar.constants';

@Component({
  selector: 'app-status-bar-api',
  templateUrl: './status-bar-api.component.html',
  styleUrls: ['./status-bar-api.component.scss']
})
export class StatusBarApiComponent {
  public columns = COLUMNS;
  public dataSourceProperties = STATUS_BAR_DATA_SOURCE_PROPERTIES;
  public dataSourceInterface = STATUS_BAR_DATA_SOURCE_INTERFACE;
  public dataSourceMethods = STATUS_BAR_DATA_SOURCE_METHODS;
  public interface = STATUS_BAR_INTERFACE;
}
