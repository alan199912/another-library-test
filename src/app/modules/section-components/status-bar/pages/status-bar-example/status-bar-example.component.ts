import { Component } from '@angular/core';
import {
  STATUS_BAR_EXAMPLE_DIRECTIVE,
  STATUS_BAR_EXMAPLE_DIRECTIVE_TS,
  STATUS_BAR_EXAMPLE_FUNCTIONALITY_HTML,
  STATUS_BAR_EXMAPLE_FUNCTIONALITY_TS,
  STATUS_BAR_STEPS
} from 'src/app/constants/status-bar.constants';

@Component({
  selector: 'app-status-bar-example',
  templateUrl: './status-bar-example.component.html',
  styleUrls: ['./status-bar-example.component.scss']
})
export class StatusBarExampleComponent {
  public steps = STATUS_BAR_STEPS;
  public exampleDirectiveHTML = STATUS_BAR_EXAMPLE_DIRECTIVE;
  public exampleDirectiveTS = STATUS_BAR_EXMAPLE_DIRECTIVE_TS;
  public exampleFuncionalityHTML = STATUS_BAR_EXAMPLE_FUNCTIONALITY_HTML;
  public exampleFuncionalityTS = STATUS_BAR_EXMAPLE_FUNCTIONALITY_TS;
}
