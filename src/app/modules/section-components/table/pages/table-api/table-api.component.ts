import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  TABLA_DATA_SOURCE_INTERFACE,
  TABLA_INTERFACE_COLUMN,
  TABLE_DATA_SOURCE,
  TABLE_DATA_SOURCE_METHODS
} from 'src/app/constants/table.constants';

@Component({
  selector: 'app-table-api',
  templateUrl: './table-api.component.html',
  styleUrls: ['./table-api.component.scss']
})
export class TableApiComponent {
  public dataSource = TABLE_DATA_SOURCE;
  public dataSourceInterface = TABLA_DATA_SOURCE_INTERFACE;
  public columns = COLUMNS;
  public dataSourceMethods = TABLE_DATA_SOURCE_METHODS;
  public exampleIterfaceColumn = TABLA_INTERFACE_COLUMN;
}
