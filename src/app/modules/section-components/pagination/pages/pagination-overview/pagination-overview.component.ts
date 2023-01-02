import { Component } from '@angular/core';
import { PAGINATION_BAD_PRACTICES, PAGINATION_BEST_PRACTICES } from 'src/app/constants/pagination.constants';

@Component({
  selector: 'app-pagination-overview',
  templateUrl: './pagination-overview.component.html',
  styleUrls: ['./pagination-overview.component.scss']
})
export class PaginationOverviewComponent {
  public bestPractices = PAGINATION_BEST_PRACTICES;
  public badPractices = PAGINATION_BAD_PRACTICES;
}
