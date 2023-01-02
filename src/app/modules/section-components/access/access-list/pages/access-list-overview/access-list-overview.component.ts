import { Component } from '@angular/core';
import { ACCESS_LIST_BAD_PRACTICES, ACCESS_LIST_BEST_PRACTICES } from 'src/app/constants/access.constants';

@Component({
  selector: 'app-access-list-overview',
  templateUrl: './access-list-overview.component.html',
  styleUrls: ['./access-list-overview.component.scss']
})
export class AccessListOverviewComponent {
  public bestPractices = ACCESS_LIST_BEST_PRACTICES;
  public badPractices = ACCESS_LIST_BAD_PRACTICES;
}
