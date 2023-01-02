import { Component } from '@angular/core';
import { COLUMNS, SIZES } from 'src/app/constants/components.constants';
import {
  DROPDOWN_DATA_SOURCE,
  DROPDOWN_DATA_SOURCE_INTERFACE,
  DROPDOWN_DATA_SOURCE_METHODS,
  DROPDOWN_INTERFACE
} from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-api',
  templateUrl: './dropdown-api.component.html',
  styleUrls: ['./dropdown-api.component.scss']
})
export class DropdownApiComponent {
  public columnsDropdown = COLUMNS;
  public dataSourceDropdown = DROPDOWN_DATA_SOURCE;
  public dataSourceMethodsDropdown = DROPDOWN_DATA_SOURCE_METHODS;
  public sizes = SIZES;
  public interface = DROPDOWN_INTERFACE;
  public dataSourceInterface = DROPDOWN_DATA_SOURCE_INTERFACE;
}
