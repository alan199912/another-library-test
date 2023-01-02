import { Component } from '@angular/core';
import { ACCESS_GROUP_BAD_PRACTICES, ACCESS_GROUP_BEST_PRACTICES } from 'src/app/constants/access.constants';

@Component({
  selector: 'app-access-group-overview',
  templateUrl: './access-group-overview.component.html',
  styleUrls: ['./access-group-overview.component.scss']
})
export class AccessGroupOverviewComponent {
  public bestPractices = ACCESS_GROUP_BEST_PRACTICES;
  public badPractices = ACCESS_GROUP_BAD_PRACTICES;
}
