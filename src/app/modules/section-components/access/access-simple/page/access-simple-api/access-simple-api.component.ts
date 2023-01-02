import { Component } from '@angular/core';
import {
  ACCESS_INTERFACE,
  ACCESS_INTERFACE_DATA_SOURCE,
  ACCESS_SIMPLE_DATA_SOURCE
} from 'src/app/constants/access.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-access-simple-api',
  templateUrl: './access-simple-api.component.html',
  styleUrls: ['./access-simple-api.component.scss']
})
export class AccessSimpleApiComponent {
  public dataSource = ACCESS_SIMPLE_DATA_SOURCE;
  public dataSourceInterface = ACCESS_INTERFACE_DATA_SOURCE;
  public columns = COLUMNS;
  public exampleIterfaceAccess = ACCESS_INTERFACE;
}
