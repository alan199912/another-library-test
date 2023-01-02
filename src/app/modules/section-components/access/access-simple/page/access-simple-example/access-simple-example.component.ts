import { Component } from '@angular/core';
import {
  ACCESS_BIG_EXAMPLE_HTML,
  ACCESS_BIG_EXAMPLE_TS,
  ACCESS_BIG_LIST_ITEMS,
  ACCESS_DESCRIPTION_EXAMPLE_TS,
  ACCESS_HORIZONTAL_EXAMPLE_HTML,
  ACCESS_HORIZONTAL_EXAMPLE_TS,
  ACCESS_ICON_EXAMPLE_TS,
  ACCESS_ICON_LIST_ITEMS,
  ACCESS_LIST_DESCTIPTION_SHORT_ITEMS,
  ACCESS_LIST_ITEMS,
  ACCESS_LOG_OUT,
  ACCESS_LOG_OUT_EXAMPLE_TS,
  ACCESS_VERTICAL_EXAMPLE_HTML,
  ACCESS_VERTICAL_EXAMPLE_TS
} from 'src/app/constants/access.constants';

@Component({
  selector: 'app-access-simple-example',
  templateUrl: './access-simple-example.component.html',
  styleUrls: ['./access-simple-example.component.scss']
})
export class AccessSimpleExampleComponent {
  public accessListItems = ACCESS_LIST_ITEMS;
  public accessIconListItems = ACCESS_ICON_LIST_ITEMS;
  public accessListDescriptionItems = ACCESS_LIST_DESCTIPTION_SHORT_ITEMS;
  public accessBigListItems = ACCESS_BIG_LIST_ITEMS;
  public accessLogOut = ACCESS_LOG_OUT;
  public exampleAccessVerticalHTML = ACCESS_VERTICAL_EXAMPLE_HTML;
  public exampleAccessIconTs = ACCESS_ICON_EXAMPLE_TS;
  public exampleAccessDescriptionTS = ACCESS_DESCRIPTION_EXAMPLE_TS;
  public exampleAccessHorizontalHTML = ACCESS_HORIZONTAL_EXAMPLE_HTML;
  public exampleAccessBigHTML = ACCESS_BIG_EXAMPLE_HTML;
  public exampleAccessVerticalTS = ACCESS_VERTICAL_EXAMPLE_TS;
  public exampleAccessHorizontalTS = ACCESS_HORIZONTAL_EXAMPLE_TS;
  public exampleAccessBigTS = ACCESS_BIG_EXAMPLE_TS;
  public exampleAccessLogOutTS = ACCESS_LOG_OUT_EXAMPLE_TS;
}
