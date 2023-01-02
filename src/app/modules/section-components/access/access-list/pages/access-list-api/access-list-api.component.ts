import { Component } from '@angular/core';
import {
  ACCESS_CATEGORY_INTERFACE,
  ACCESS_CATEGORY_INTERFACE_DATA_SOURCE,
  ACCESS_INTERFACE,
  ACCESS_INTERFACE_DATA_SOURCE,
  ACCESS_LIST_DATA_SOURCE
} from 'src/app/constants/access.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-access-list-api',
  templateUrl: './access-list-api.component.html',
  styleUrls: ['./access-list-api.component.scss']
})
export class AccessListApiComponent {
  public dataSource = ACCESS_LIST_DATA_SOURCE;
  public dataSourceInterface = ACCESS_INTERFACE_DATA_SOURCE;
  public dataSourceCategoryInterface = ACCESS_CATEGORY_INTERFACE_DATA_SOURCE;
  public columns = COLUMNS;
  public exampleIterfaceAccess = ACCESS_INTERFACE;
  public exampleIterfaceAccessCategory = ACCESS_CATEGORY_INTERFACE;
}
