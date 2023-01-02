import { Component } from '@angular/core';
import {
  ACCESS_GROUP_EXAMPLE_HTML,
  ACCESS_GROUP_EXAMPLE_TS,
  ACCESS_GROUP_REVERSE_EXAMPLE_HTML,
  ACCESS_GROUP_REVERSE_EXAMPLE_TS,
  ACCESS_GROUP_WITH_ICON_EXAMPLE_HTML,
  ACCESS_GROUP_WITH_ICON_EXAMPLE_TS,
  ACCESS_ITEM
} from 'src/app/constants/access.constants';

@Component({
  selector: 'app-access-group-example',
  templateUrl: './access-group-example.component.html',
  styleUrls: ['./access-group-example.component.scss']
})
export class AccessGroupExampleComponent {
  public accessItem = ACCESS_ITEM;
  public exampleAccessGroupHTML = ACCESS_GROUP_EXAMPLE_HTML;
  public exampleAccessGroupWithIconHTML = ACCESS_GROUP_WITH_ICON_EXAMPLE_HTML;
  public exampleAccessGroupReverseHTML = ACCESS_GROUP_REVERSE_EXAMPLE_HTML;
  public exampleAccessGroupTS = ACCESS_GROUP_EXAMPLE_TS;
  public exampleAccessGroupWithIconTS = ACCESS_GROUP_WITH_ICON_EXAMPLE_TS;
  public exampleAccessGroupReverseTS = ACCESS_GROUP_REVERSE_EXAMPLE_TS;
}
