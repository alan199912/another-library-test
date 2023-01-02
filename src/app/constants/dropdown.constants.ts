export const DROPDOWN_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/dropdown/overview'
  },
  {
    title: 'Api',
    route: '/components/dropdown/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/dropdown/examples'
  }
];

export const DROPDOWN_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public items = [
      {
        key: 'option_1',
        value: 'Opción 1'
      },
      {
        key: 'option_2',
        value: 'Opción 2'
      },
      {
        key: 'option_3',
        value: 'Opción 3'
      }
    ];

    public getData(event: string[] | string): void {
      console.log(event);
    }
  }
`;

export const DROPDOWN_EXAMPLE = `
  <o-dropdown
    name="Filtro"
    [items]="items"
    (dataSelected)="getData($event)"
  >
  </o-dropdown>`;

export const DROPDOWN_BORDER_EXAMPLE = `
  <o-dropdown
    name="Filtro"
    [items]="items"
    [isBordered]="true"
    (dataSelected)="getData($event)"
    >
  </o-dropdown>`;

export const DROPDOWN_SIZE_LG_EXAMPLE = `
  <o-dropdown
    name="Filtro"
    [items]="items"
    size="lg"
    [isBordered]="true"
    (dataSelected)="getData($event)"
    >
  </o-dropdown>`;

export const DROPDOWN_SIZE_MD_EXAMPLE = `
  <o-dropdown
    name="Filtro"
    [items]="items"
    [isBordered]="true"
    (dataSelected)="getData($event)"
    >
  </o-dropdown>`;

export const DROPDOWN_SIZE_SM_EXAMPLE = `
  <o-dropdown
    name="Filtro"
    [items]="items"
    size="sm"
    [isBordered]="true"
    (dataSelected)="getData($event)"
    >
  </o-dropdown>`;

export const DROPDOWN_DATA_SOURCE = [
  {
    name: '@Input() <br/> name: string',
    description: 'Se utiliza para definir el nombre del desplegable.'
  },
  {
    name: '@Input() <br/> items: Dropdown[]',
    description: 'Se utiliza para definir los items del desplegable.'
  },
  {
    name: '@Input() <br/> size: Sizes',
    description: 'Se utiliza para definir el tamaño del desplegable.'
  },
  {
    name: '@Input() <br/> isBordered: boolean',
    description: 'Se utiliza para definir si el desplegable se muestra con borde. Por defecto es false.'
  },
  {
    name: '@Input() <br/> isIcon: boolean',
    description: 'Se utiliza para definir si en el desplegable se muestra un icono. Por defecto es false.'
  },
  {
    name: '@Input() <br/> isMultipleSelection: boolean',
    description:
      'Se utiliza para definir si el desplegable permite múltiple selección. Por defecto es false. <br /> Solo se puede utilizar cuando isIcon esta en true.'
  }
];

export const DROPDOWN_DATA_SOURCE_METHODS = [
  {
    name: '@Output() <br/> dataSelected: string | string[]',
    description:
      'Se utiliza para obtener el valor seleccionado. <br /> El valor devuelto puede ser un string o array de strings.'
  }
];

export const DROPDOWN_DATA_SOURCE_INTERFACE = [
  {
    name: 'key: string',
    description: 'Se utiliza para definir la clave del item.'
  },
  {
    name: 'value: string',
    description: 'Se utiliza para definir el valor del item en el desplegable.'
  }
];

export const DROPDOWN_INTERFACE = `
  interface Dropdown {
    key: string;
    value: string;
  }
`;

export const DROPDOWN_ICON_EXAMPLE = `
  <o-dropdown
    name="Mi perfil"
    [items]="items"
    [isIcon]="true"
    (dataSelected)="getData($event)"
  >
    <span icon class="dropdown-user-icon ml-0">&nbsp;</span>
  </o-dropdown>`;

export const DROPDOWN_ICON_BORDER_EXAMPLE = `
  <o-dropdown
    name="Mi perfil"
    [items]="items"
    [isIcon]="true"
    [isBordered]="true"
    (dataSelected)="getData($event)"
  >
    <span icon class="dropdown-user-icon ml-0">&nbsp;</span>
  </o-dropdown>`;

export const DROPDOWN_ICON_ONLY_EXAMPLE = `
  <o-dropdown
    [items]="items"
    (dataSelected)="getData($event)"
    [isIcon]="true"
  >
    <span icon class="dropdown-user-icon ml-0">&nbsp;</span>
  </o-dropdown>`;

export const DROPDOWN_ICON_MULTIPLE_SELECTION_EXAMPLE = `
  <o-dropdown
    name="Mi perfil"
    [items]="items"
    [isIcon]="true"
    [isMultipleSelection]="true"
    (dataSelected)="getData($event)"
  >
    <span icon class="dropdown-user-icon ml-0">&nbsp;</span>
  </o-dropdown>`;

export const DROPDOWN_BEST_PRACTICES = [
  '<strong>Limitar a 15 la cantidad de opciones</strong> para elegir dentro de un menú.',
  '<strong>Desplazar los menús con más de 5 opciones.</strong> En este estado, muestra una barra de desplazamiento en su lado derecho para realizar el scroll correspondiente.',
  '<strong>Utilizar los desplegables para navegación o filtros,</strong> en donde se inicia una acción basada en la selección.',
  '<strong>Priorizar las opciones en un orden lógico</strong> colocando la opción más seleccionada en la parte superior.',
  '<strong>Mantener los textos de las opciones del menú breves y concisas.</strong> Se desaconsejan las opciones de menú que se extiendan en varias líneas.',
  '<strong>Se pueden combinar</strong> con los Botones y la Navegación horizontal.',
  '<strong>Alinear el menú desplegable con prioridad a la izquierda.</strong> En caso de no tener espacio suficiente para alinear desde la izquierda, alinear a la derecha.',
  '<strong>Alinear el menú desplegable al centro cuando los espacios en la pantalla sean reducidos.</strong>'
];

export const DROPDOWN_BAD_PRACTICES = ['No habilitar la opción de desplegar 2 o más menús al mismo tiempo.'];
