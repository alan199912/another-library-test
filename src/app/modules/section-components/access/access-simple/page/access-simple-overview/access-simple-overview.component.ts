import { Component } from '@angular/core';
import { ACCESS_SIMPLE_BAD_PRACTICES, ACCESS_SIMPLE_BEST_PRACTICES } from 'src/app/constants/access.constants';

@Component({
  selector: 'app-access-simple-overview',
  templateUrl: './access-simple-overview.component.html',
  styleUrls: ['./access-simple-overview.component.scss']
})
export class AccessSimpleOverviewComponent {
  public bestPractices = ACCESS_SIMPLE_BEST_PRACTICES;
  public badPractices = ACCESS_SIMPLE_BAD_PRACTICES;
}
