import { Component } from '@angular/core';
import { DROPDOWN_NAVIGATION } from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  public navigation = DROPDOWN_NAVIGATION;
}
