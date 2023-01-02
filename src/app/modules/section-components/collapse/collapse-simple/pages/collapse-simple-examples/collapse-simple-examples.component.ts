import { Component } from '@angular/core';
import {
  COLLAPSE_SIMPLE_HTML,
  COLLAPSE_SIMPLE_HTML_MULTIPLE,
  COLLAPSE_SIMPLE_HTML_ICON,
  COLLAPSE_SIMPLE_TS,
  COLLAPSE_ARRAY,
  COLLAPSE_SIMPLE_ICON_TS,
  COLLAPSE_ICON_ARRAY
} from 'src/app/constants/collapse.constants';
@Component({
  selector: 'app-collapse-simple-examples',
  templateUrl: './collapse-simple-examples.component.html',
  styleUrls: ['./collapse-simple-examples.component.scss']
})
export class CollapseSimpleExamplesComponent {
  public array = COLLAPSE_ARRAY;
  public arrayIcon = COLLAPSE_ICON_ARRAY;
  public exampleHTML = COLLAPSE_SIMPLE_HTML;
  public exampleHTMLMultiple = COLLAPSE_SIMPLE_HTML_MULTIPLE;
  public exampleHTMLIcon = COLLAPSE_SIMPLE_HTML_ICON;
  public exampleTs = COLLAPSE_SIMPLE_TS;
  public exampleIconTs = COLLAPSE_SIMPLE_ICON_TS;
}
