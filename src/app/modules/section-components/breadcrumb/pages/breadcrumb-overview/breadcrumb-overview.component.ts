import { Component } from '@angular/core';
import { BREADCRUMB_BEST_PRACTICES } from 'src/app/constants/breadcrumb.constants';

@Component({
  selector: 'app-breadcrumb-overview',
  templateUrl: './breadcrumb-overview.component.html',
  styleUrls: ['./breadcrumb-overview.component.scss']
})
export class BreadcrumbOverviewComponent {
  public bestPractices = BREADCRUMB_BEST_PRACTICES;
}
