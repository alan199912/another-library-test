import { Component } from '@angular/core';
import {
  COLLAPSE_SIMPLE_DATA_SOURCE,
  COLLAPSE_SIMPLE_INTERFACE,
  COLLAPSE_SIMPLE_INTERFACE_DATA_SOURCE
} from 'src/app/constants/collapse.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-collapse-simple-api',
  templateUrl: './collapse-simple-api.component.html',
  styleUrls: ['./collapse-simple-api.component.scss']
})
export class CollapseSimpleApiComponent {
  public columnsCollapse = COLUMNS;
  public dataSourceCollapse = COLLAPSE_SIMPLE_DATA_SOURCE;
  public dataSourceCollapseInterface = COLLAPSE_SIMPLE_INTERFACE_DATA_SOURCE;
  public exampleIterface = COLLAPSE_SIMPLE_INTERFACE;
}
