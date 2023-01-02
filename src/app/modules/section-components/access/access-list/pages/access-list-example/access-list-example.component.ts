import { Component } from '@angular/core';
import {
  ACCESS_CATEGORY_ICON_ITEMS,
  ACCESS_CATEGORY_ITEMS,
  ACCESS_ICON_LIST_ITEMS,
  ACCESS_ITEM,
  ACCESS_LIST_DESCRIPTION_WITH_ICON_EXAMPLE_TS,
  ACCESS_LIST_DESCTIPTION_ITEMS,
  ACCESS_LIST_EXAMPLE_HTML,
  ACCESS_LIST_EXAMPLE_TS,
  ACCESS_LIST_ITEMS,
  ACCESS_LIST_WITH_BOTTOM_ACCESS_EXAMPLE_TS,
  ACCESS_LIST_WITH_BOTTON_ACCESS_EXAMPLE_HTML,
  ACCESS_LIST_WITH_CATEGORIES_EXAMPLE_HTML,
  ACCESS_LIST_WITH_CATEGORIES_EXAMPLE_TS,
  ACCESS_LIST_WITH_CATEGORIES_ICON_EXAMPLE_TS,
  ACCESS_LIST_WITH_ICON_EXAMPLE_HTML,
  ACCESS_LIST_WITH_ICON_EXAMPLE_TS
} from 'src/app/constants/access.constants';

@Component({
  selector: 'app-access-list-example',
  templateUrl: './access-list-example.component.html',
  styleUrls: ['./access-list-example.component.scss']
})
export class AccessListExampleComponent {
  public accessItem = ACCESS_ITEM;
  public accessListItems = ACCESS_LIST_ITEMS;
  public accessListIconItems = ACCESS_ICON_LIST_ITEMS;
  public accessListDescriptiveItems = ACCESS_LIST_DESCTIPTION_ITEMS;
  public accessCategoryItems = ACCESS_CATEGORY_ITEMS;
  public accessCategoryIconItems = ACCESS_CATEGORY_ICON_ITEMS;

  public exampleAccessListHTML = ACCESS_LIST_EXAMPLE_HTML;
  public exampleAccessListWithBottonAccessHTML = ACCESS_LIST_WITH_BOTTON_ACCESS_EXAMPLE_HTML;
  public exampleAccessListWithIconHTML = ACCESS_LIST_WITH_ICON_EXAMPLE_HTML;
  public exampleAccessListWithCategoriesHTML = ACCESS_LIST_WITH_CATEGORIES_EXAMPLE_HTML;
  public exampleAccessListTS = ACCESS_LIST_EXAMPLE_TS;
  public exampleAccessListWithBottomAccessTS = ACCESS_LIST_WITH_BOTTOM_ACCESS_EXAMPLE_TS;
  public exampleAccessListWithIconTS = ACCESS_LIST_WITH_ICON_EXAMPLE_TS;
  public exampleAccessListDescriptionWithIconTS = ACCESS_LIST_DESCRIPTION_WITH_ICON_EXAMPLE_TS;
  public exampleAccessListWithCategoriesTS = ACCESS_LIST_WITH_CATEGORIES_EXAMPLE_TS;
  public exampleAccessListWithCategoriesIconTS = ACCESS_LIST_WITH_CATEGORIES_ICON_EXAMPLE_TS;
}
