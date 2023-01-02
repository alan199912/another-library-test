import { Component } from '@angular/core';
import {
  ALERT_EXAMPLE_COLORS,
  ALERT_EXAMPLE_HIGHLIGHT,
  ALERT_EXAMPLE_LISTS,
  ALERT_EXAMPLE_TEXT
} from 'src/app/constants/alert.constants';

@Component({
  selector: 'app-alert-examples',
  templateUrl: './alert-examples.component.html',
  styleUrls: ['./alert-examples.component.scss']
})
export class AlertExamplesComponent {
  public exampleText = ALERT_EXAMPLE_TEXT;
  public exampleHighlight = ALERT_EXAMPLE_HIGHLIGHT;
  public exampleColors = ALERT_EXAMPLE_COLORS;
  public exampleLists = ALERT_EXAMPLE_LISTS;
}
