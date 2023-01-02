import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-pagination-api',
  templateUrl: './pagination-api.component.html',
  styleUrls: ['./pagination-api.component.scss']
})
export class PaginationApiComponent {
  public dataSourcePaginationProperties = [
    {
      name: '@Input() <br/> totalPages: number',
      description: 'Se utiliza para establecer el número total de páginas.'
    },
    {
      name: '@Input() <br/> ariaLabel: string',
      description: 'Se utiliza para establecer el texto de la etiqueta aria-label.'
    },
    {
      name: '@Input() <br/> actualPage: number',
      description: 'Se utiliza para establecer la página actual. Por defecto es 1.'
    }
  ];
  public dataSourcePaginationMethods = [
    {
      name: '@Output() <br/> currentPage: EventEmitter&lt;number&gt;',
      description: 'Se utiliza para obtener la página actual.'
    }
  ];

  public columnsPagination = COLUMNS;
}
