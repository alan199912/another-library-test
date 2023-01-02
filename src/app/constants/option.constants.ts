export const OPTION_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/option/overview'
  },
  {
    title: 'Api',
    route: '/components/option/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/option/examples'
  }
];

export const OPTION_DATA_SOURCE = [
  {
    name: '@Input() <br /> name: string',
    description: 'Se utiliza para definir el nombre de la opción.'
  },
  {
    name: '@Input() <br /> options: Option',
    description: 'Se utiliza para definir las opciones que se va a mostrar.'
  },
  {
    name: '@Input() <br /> size: Sizes',
    description: 'Se utiliza para definir el tamaño de las opciones'
  }
];

export const OPTION_DATA_SOURCE_METHODS = [
  {
    name: '@Output() <br/> optionSelected: EventEmitter&lt;string&gt;',
    description: 'Se utiliza para obtener la opción seleccionada.'
  }
];

export const OPTION_DATA_SOURCE_INTERFACE = [
  {
    name: 'key: string',
    description: 'Se utiliza para definir la clave del item de la opción.'
  },
  {
    name: 'value: string',
    description: 'Se utiliza para definir el valor del item de la opción.'
  },
  {
    name: 'active: boolean',
    description: 'Se utiliza para definir si el item está activo.'
  }
];

export const OPTION_BEST_PRACTICES = [
  '<strong>Limita a una cantidad de entre 5 y 15 opciones</strong> para elegir dentro de un menú.',
  '<strong>En formularios al utilizar menos de 5 opciones,</strong> use el componente de radio button y no un menú desplegable con opciones, específicamente en los formularios.',
  '<strong>Al utilizar más de 5 opciones,</strong> los menús se pueden desplazar. En este estado, muestra una barra de desplazamiento en su lado derecho para realizar el scroll correspondiente.',
  '<strong>Botones de radio y casillas de verificación</strong> pueden incluirse dentro de las opciones.',
  'Prioriza las opciones en un orden lógico</strong> coloca la opción más seleccionada en primer lugar.',
  '<strong>Mantene las opciones del menú breves y concisas.</strong> Se desaconsejan las opciones de menú largas que hacen que el texto se ajuste a varias líneas.'
];

export const OPTION_BAD_PRACTICES = [
  '<strong>No usar textos largos</strong> en donde el usuario se canse o confunda.',
  '<strong>No usar más de 20 opciones dentro de un menú,</strong> revisa la información, prioriza o dividi el menú en otro con una nueva categoría.'
];

export const OPTION_INTERFACE = `
  interface Option {
    key: string;
    value: string;
    active?: boolean;
  }
`;

export const OPTION_EXAMPLE_HTML = `
  <o-option name="Desplegable" [options]="options" (optionSelected)="selectedItem($event)"></o-option>
`;

export const OPTION_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public options = [
      { key: 'item_1', value: 'Item 1' },
      { key: 'item_2', value: 'Item 2', active: true },
      { key: 'item_3', value: 'Item 3' }
    ];

    public selectedItem (event: string): void {
      console.log(event);
    }
  }
`;

export const OPTION_EXAMPLE_SIZES_HTML = `
  <form class="options-container">
    <o-option name="Desplegable chico" [options]="optionsSm" size="sm"></o-option>
    <o-option name="Desplegable mediano" [options]="options"></o-option>
    <o-option name="Desplegable grande" [options]="optionsLg" size="lg"></o-option>
  </form>
`;

export const OPTION_EXAMPLE_SIZES_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public optionsSm = [
      { key: 'item_sm_1', value: 'Item 1' },
      { key: 'item_sm_2', value: 'Item 2', active: true },
      { key: 'item_sm_3', value: 'Item 3' }
    ];

    public options = [
      { key: 'item1', value: 'Item 1' },
      { key: 'item2', value: 'Item 2', active: true },
      { key: 'item3', value: 'Item 3' }
    ];

    public optionsLg = [
      { key: 'item_lg_1', value: 'Item 1' },
      { key: 'item_lg_2', value: 'Item 2', active: true },
      { key: 'item_lg_3', value: 'Item 3' }
    ];
  }
`;
