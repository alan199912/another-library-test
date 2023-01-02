import { Component } from '@angular/core';
import { OPTION_NAVIGATION } from 'src/app/constants/option.constants';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  public optionNavigation = OPTION_NAVIGATION;
}
