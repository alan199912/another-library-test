import { Component } from '@angular/core';
import { ALERT_BAD_PRACTICES, ALERT_BEST_PRACTICES } from 'src/app/constants/alert.constants';

@Component({
  selector: 'app-alert-overview',
  templateUrl: './alert-overview.component.html',
  styleUrls: ['./alert-overview.component.scss']
})
export class AlertOverviewComponent {
  public bestPractices = ALERT_BEST_PRACTICES;
  public badPractices = ALERT_BAD_PRACTICES;
}
