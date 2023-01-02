import { Component } from '@angular/core';
import {
  COLLAPSE_INFO_DATA_SOURCE,
  COLLAPSE_INFO_DATA_SOURCE_INTERFACE,
  COLLAPSE_INFO_INTERFACE
} from 'src/app/constants/collapse.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-collapse-info-api',
  templateUrl: './collapse-info-api.component.html',
  styleUrls: ['./collapse-info-api.component.scss']
})
export class CollapseInfoApiComponent {
  public columnsCollapse = COLUMNS;
  public dataSourceCollapse = COLLAPSE_INFO_DATA_SOURCE;
  public dataSourceInterface = COLLAPSE_INFO_DATA_SOURCE_INTERFACE;
  public exampleIterface = COLLAPSE_INFO_INTERFACE;
}
