import { Component } from '@angular/core';
import { STATUS_BAR_NAVIGATION } from '../../../constants/status-bar.constants';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent {
  public statusBarNavigation = STATUS_BAR_NAVIGATION;
}
