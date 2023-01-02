import { Component } from '@angular/core';
import {
  DROPDOWN_EXAMPLE,
  DROPDOWN_BORDER_EXAMPLE,
  DROPDOWN_SIZE_LG_EXAMPLE,
  DROPDOWN_SIZE_MD_EXAMPLE,
  DROPDOWN_SIZE_SM_EXAMPLE,
  DROPDOWN_EXAMPLE_TS,
  DROPDOWN_ICON_EXAMPLE,
  DROPDOWN_ICON_BORDER_EXAMPLE,
  DROPDOWN_ICON_ONLY_EXAMPLE,
  DROPDOWN_ICON_MULTIPLE_SELECTION_EXAMPLE
} from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-examples',
  templateUrl: './dropdown-examples.component.html',
  styleUrls: ['./dropdown-examples.component.scss']
})
export class DropdownExamplesComponent {
  public exampleDropdown = DROPDOWN_EXAMPLE;
  public exampleDropdownBorder = DROPDOWN_BORDER_EXAMPLE;
  public exampleDropdownSizes = [DROPDOWN_SIZE_LG_EXAMPLE, DROPDOWN_SIZE_MD_EXAMPLE, DROPDOWN_SIZE_SM_EXAMPLE];
  public exampeDropdownTs = DROPDOWN_EXAMPLE_TS;
  public exampleDropdownIcon = DROPDOWN_ICON_EXAMPLE;
  public exampleDropdownIconBorder = DROPDOWN_ICON_BORDER_EXAMPLE;
  public exampleDropdownOnlyIcon = DROPDOWN_ICON_ONLY_EXAMPLE;
  public exampleDropdownMultiple = DROPDOWN_ICON_MULTIPLE_SELECTION_EXAMPLE;

  public options = [
    {
      key: 'option_1',
      value: 'Opción 1'
    },
    {
      key: 'option_2',
      value: 'Opción 2'
    },
    {
      key: 'option_3',
      value: 'Opción 3'
    }
  ];

  public getData(event: string[] | string): void {
    console.log(event);
  }
}
