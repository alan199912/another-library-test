import { Component } from '@angular/core';
import { COLLAPSE_SIMPLE_NAVIGATION } from 'src/app/constants/collapse.constants';

@Component({
  selector: 'app-collapse-simple',
  templateUrl: './collapse-simple.component.html',
  styleUrls: ['./collapse-simple.component.scss']
})
export class CollapseSimpleComponent {
  public navigation = COLLAPSE_SIMPLE_NAVIGATION;
}
