import { Component } from '@angular/core';
import { COLLAPSE_INFO_NAVIGATION } from 'src/app/constants/collapse.constants';

@Component({
  selector: 'app-collapse-info',
  templateUrl: './collapse-info.component.html',
  styleUrls: ['./collapse-info.component.scss']
})
export class CollapseInfoComponent {
  public navigation = COLLAPSE_INFO_NAVIGATION;
}
