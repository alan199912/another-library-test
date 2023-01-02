import { Component } from '@angular/core';
import { LINK_LIST_BAD_PRACTICES, LINK_LIST_BEST_PRACTICES } from 'src/app/constants/link-list.constans';

@Component({
  selector: 'app-link-list-overview',
  templateUrl: './link-list-overview.component.html',
  styleUrls: ['./link-list-overview.component.scss']
})
export class LinkListOverviewComponent {
  public bestPractices = LINK_LIST_BEST_PRACTICES;
  public badPractices = LINK_LIST_BAD_PRACTICES;
}
