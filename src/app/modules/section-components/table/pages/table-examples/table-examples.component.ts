import { Component } from '@angular/core';
import {
  COLUMNS_TABLE_EXAMPLE,
  DATA_SOURCE_TABLE_EXAMPLE,
  TABLE_EXAMPLE_ALL_HTML,
  TABLE_EXAMPLE_BORDERED_HTML,
  TABLE_EXAMPLE_HOVER_HTML,
  TABLE_EXAMPLE_NORMAL_HTML,
  TABLE_EXAMPLE_NORMAL_TS,
  TABLE_EXAMPLE_SELECTABLE_HTML,
  TABLE_EXAMPLE_SELECTABLE_TS,
  TABLE_EXAMPLE_STRIPED_HTML
} from 'src/app/constants/table.constants';

@Component({
  selector: 'app-table-examples',
  templateUrl: './table-examples.component.html',
  styleUrls: ['./table-examples.component.scss']
})
export class TableExamplesComponent {
  public dataSourceTableExample = DATA_SOURCE_TABLE_EXAMPLE;
  public columnsTableExample = COLUMNS_TABLE_EXAMPLE;
  public exampleNormalHTML = TABLE_EXAMPLE_NORMAL_HTML;
  public exampleNormalTS = TABLE_EXAMPLE_NORMAL_TS;
  public exampleBorderedHTML = TABLE_EXAMPLE_BORDERED_HTML;
  public exampleStripedHTML = TABLE_EXAMPLE_STRIPED_HTML;
  public exampleHoverHTML = TABLE_EXAMPLE_HOVER_HTML;
  public exampleAllHTML = TABLE_EXAMPLE_ALL_HTML;
  public exampleSelectableHTML = TABLE_EXAMPLE_SELECTABLE_HTML;
  public exampleSelectableTS = TABLE_EXAMPLE_SELECTABLE_TS;

  public dataSelected(event: any[]): void {
    console.log(event);
  }
}
