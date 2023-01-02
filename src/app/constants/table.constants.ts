import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';

export const TABLE_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/table/overview'
  },
  {
    title: 'Api',
    route: '/components/table/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/table/examples'
  }
];

export const TABLE_DATA_SOURCE = [
  {
    name: '@Input() <br/> displayedColumns: Column[]',
    description: 'Se utiliza para definir las columnas que se mostrarán en la tabla.'
  },
  {
    name: '@Input() <br/> dataSource: any[]',
    description: 'Se utiliza para definir los datos que se mostrarán en la tabla.'
  },
  {
    name: '@Input() <br/> isBordered: boolean',
    description: 'Se utiliza para definir si la tabla tendrá bordes.'
  },
  {
    name: '@Input() <br/> isStriped: boolean',
    description: 'Se utiliza para definir si la tabla tendrá rayas.'
  },
  {
    name: '@Input() <br/> isHover: boolean',
    description: 'Se utiliza para definir si la tabla tendrá efecto hover.'
  },
  {
    name: '@Input() <br/> isSelectable: boolean',
    description: 'Se utiliza para definir si la tabla tendrá filas seleccionables.'
  }
];

export const TABLA_DATA_SOURCE_INTERFACE = [
  {
    name: 'key: string',
    description:
      'Se utiliza para definir el nombre de la propiedad del objeto. <br /> Que tiene que ser igual al que se especifica en el dataSource.'
  },
  {
    name: 'value: string',
    description: 'Se utiliza para definir el nombre de la columna.'
  }
];

export const TABLE_DATA_SOURCE_METHODS = [
  {
    name: '@Output() <br/> dataSelected: EventEmitter&lt;any&gt;',
    description: 'Se utiliza para obtener el elemento seleccionado.'
  }
];

export const TABLA_INTERFACE_COLUMN = `
  interface Column {
    key: string;
    value: string;
  }`;

const formattedTableExampleTsCode = (code: any, codeColumn: any) => `
  import { Component  } from '@angular/core';
  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public dataSource = ${codeFormattingArrayList(code)}
    ];

    public columns = ${codeFormattingArrayList(codeColumn)}
    ];
  }`;

const formattedTableSelectableExampleTsCode = (code: any) => `
  import { Component  } from '@angular/core';
  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public dataSource = ${codeFormattingArrayList(code)}
    ];

    public columns = ${codeFormattingArrayList(code)}
    ];

    public dataSelected(event: any[]): void {
      console.log(event);
    }
  }`;

export const DATA_SOURCE_TABLE_EXAMPLE = [
  {
    id: 1,
    header: 'Juan',
    description: 'Alberto'
  },
  {
    id: 2,
    header: 'María',
    description: 'Julia'
  },
  {
    id: 3,
    header: 'Esther',
    description: 'Fermin'
  },
  {
    id: 4,
    header: 'José',
    description: 'Juana'
  }
];

export const COLUMNS_TABLE_EXAMPLE = [
  {
    key: 'id',
    value: 'ID'
  },
  {
    key: 'header',
    value: 'Encabezado'
  },
  {
    key: 'description',
    value: 'Descripción'
  }
];

export const TABLE_EXAMPLE_NORMAL_HTML = `<o-table [displayedColumns]="columns" [dataSource]="dataSource"></o-table>`;

export const TABLE_EXAMPLE_NORMAL_TS = formattedTableExampleTsCode(DATA_SOURCE_TABLE_EXAMPLE, COLUMNS_TABLE_EXAMPLE);

export const TABLE_EXAMPLE_BORDERED_HTML = `
  <o-table
    [displayedColumns]="columns"
    [dataSource]="dataSource"
    [isBordered]="true"
  ></o-table>`;

export const TABLE_EXAMPLE_STRIPED_HTML = `
  <o-table
    [displayedColumns]="columns"
    [dataSource]="dataSource"
    [isStriped]="true"
  ></o-table>`;

export const TABLE_EXAMPLE_HOVER_HTML = `
  <o-table
    [displayedColumns]="columns"
    [dataSource]="dataSource"
    [isHover]="true"
  ></o-table>`;

export const TABLE_EXAMPLE_ALL_HTML = `
  <o-table
    [displayedColumns]="columns"
    [dataSource]="dataSource"
    [isStriped]="true"
    [isBordered]="true"
    [isHover]="true"
  ></o-table>`;

export const TABLE_EXAMPLE_SELECTABLE_HTML = `
  <o-table
    [displayedColumns]="columns"
    [dataSource]="dataSource"
    [isHover]="true"
    [isSelectable]="true"
    (dataSelected)="dataSelected($event)"
  ></o-table>`;

export const TABLE_EXAMPLE_SELECTABLE_TS = formattedTableSelectableExampleTsCode(DATA_SOURCE_TABLE_EXAMPLE);
