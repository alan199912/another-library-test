import { Component } from '@angular/core';
import {
  OPTION_EXAMPLE_HTML,
  OPTION_EXAMPLE_SIZES_HTML,
  OPTION_EXAMPLE_SIZES_TS,
  OPTION_EXAMPLE_TS
} from 'src/app/constants/option.constants';

@Component({
  selector: 'app-option-examples',
  templateUrl: './option-examples.component.html',
  styleUrls: ['./option-examples.component.scss']
})
export class OptionExamplesComponent {
  public option = [
    { key: 'item_1', value: 'Item 1' },
    { key: 'item_2', value: 'Item 2', active: true },
    { key: 'item_3', value: 'Item 3' }
  ];

  public optionsSm = [
    { key: 'item_sm_1', value: 'Item 1' },
    { key: 'item_sm_2', value: 'Item 2', active: true },
    { key: 'item_sm_3', value: 'Item 3' }
  ];

  public options = [
    { key: 'item1', value: 'Item 1' },
    { key: 'item2', value: 'Item 2', active: true },
    { key: 'item3', value: 'Item 3' }
  ];

  public optionsLg = [
    { key: 'item_lg_1', value: 'Item 1' },
    { key: 'item_lg_2', value: 'Item 2', active: true },
    { key: 'item_lg_3', value: 'Item 3' }
  ];

  public selectedItem(event: string): void {
    console.log(event);
  }

  public optionExampleHTML = OPTION_EXAMPLE_HTML;
  public optionExampleTS = OPTION_EXAMPLE_TS;
  public optionSizesHTML = OPTION_EXAMPLE_SIZES_HTML;
  public optionSizesTS = OPTION_EXAMPLE_SIZES_TS;
}
