import { Component } from '@angular/core';
import {
  ACCESS_GROUP_DATA_SOURCE,
  ACCESS_GROUP_INTERFACE_DATA_SOURCE,
  ACCESS_GROUP_TYPE,
  ACCESS_INTERFACE
} from 'src/app/constants/access.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-access-group-api',
  templateUrl: './access-group-api.component.html',
  styleUrls: ['./access-group-api.component.scss']
})
export class AccessGroupApiComponent {
  public dataSource = ACCESS_GROUP_DATA_SOURCE;
  public dataGroupInterfaceSource = ACCESS_GROUP_INTERFACE_DATA_SOURCE;
  public columns = COLUMNS;
  public exampleIterfaceAccess = ACCESS_INTERFACE;
  public exampleTypeAccessGroup = ACCESS_GROUP_TYPE;
}
