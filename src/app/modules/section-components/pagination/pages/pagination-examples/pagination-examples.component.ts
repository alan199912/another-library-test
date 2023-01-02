import { Component } from '@angular/core';
import { PAGINATION_EXAMPLE_HTML, PAGINATION_EXAMPLE_TS } from 'src/app/constants/pagination.constants';

@Component({
  selector: 'app-pagination-examples',
  templateUrl: './pagination-examples.component.html',
  styleUrls: ['./pagination-examples.component.scss']
})
export class PaginationExamplesComponent {
  public exampleHTML = PAGINATION_EXAMPLE_HTML;
  public exampleTS = PAGINATION_EXAMPLE_TS;

  public actualPage(event: number): void {
    console.log(event);
  }
}
