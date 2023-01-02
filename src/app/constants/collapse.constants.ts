import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';

const COLLAPSE_ROUTE = 'collapse';
const COLLAPSE_SIMPLE_ROUTE = 'collapse/collapse-simple';
const COLLAPSE_INFO_ROUTE = 'collapse/collapse-info';

export const COLLAPSE_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/collapse/overview'
  },
  {
    title: 'Api',
    route: '/components/collapse/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/collapse/examples'
  }
];

export const COLLAPSE_SIMPLE_NAVIGATION = COLLAPSE_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(COLLAPSE_ROUTE, COLLAPSE_SIMPLE_ROUTE)
  };
});

export const COLLAPSE_INFO_NAVIGATION = COLLAPSE_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(COLLAPSE_ROUTE, COLLAPSE_INFO_ROUTE)
  };
});

export const COLLAPSE_BEST_PRACTIVES = [
  '<strong>Utiliza otros recursos o componentes antes de usar los colapsables,</strong> te sugerimos simplificar y reducir la cantidad de contenido o dividir el contenido en varias páginas o mantener el contenido en una sola página separado por encabezados.'
];

export const COLLAPSE_BAD_PRACTICES = [
  '<strong>No utilice un acordeón para el contenido</strong> que todos los usuarios necesitan ver, no lo oculte dentro de un colapsable.',
  '<strong>Cuando el contenido es poco o insuficiente</strong> utilice otra herramienta o componente para mostrar esa información, como un encabezado y texto simple. Los colapsables aumentan la carga cognitiva de los usuarios a la hora de decidir.'
];

export const COLLAPSE_SIMPLE_DATA_SOURCE = [
  {
    name: '@Input() <br/> expandableContent: Collapse[]',
    description: 'Se utiliza para definir el contenido del componente.'
  },
  {
    name: '@Input() <br/> isMultipleSelection: boolean',
    description: 'Se utiliza para seleccionar múltiples elementos.'
  },
  {
    name: '@Input() <br/> identifier: string',
    description: 'Se utiliza para identificar el componente. <br /> Para que se diferencien los colapsables entre sí.'
  }
];

export const COLLAPSE_SIMPLE_INTERFACE_DATA_SOURCE = [
  {
    name: 'title: string',
    description: 'Se utiliza para definir el título.'
  },
  {
    name: 'description: string',
    description: 'Se utiliza para definir la descripción.'
  },
  {
    name: 'icon: string',
    description: 'Se utiliza para definir el icono del collapse. <br /> Se debe utilizar clases de boxicons.'
  }
];

export const COLLAPSE_INFO_DATA_SOURCE = [
  {
    name: '@Input() <br/> title: string',
    description: 'Se utiliza para definir el título del componente.'
  },
  {
    name: '@Input() <br/> subtitle: string',
    description: 'Se utiliza para definir el subtítulo del componente.'
  },
  {
    name: '@Input() <br/> identifier: string',
    description: 'Se utiliza para identificar el componente.'
  },
  {
    name: '@Input() <br/> expandableContent: CollapseInfo[]',
    description: 'Se utiliza para definir el contenido del componente.'
  }
];

export const COLLAPSE_INFO_DATA_SOURCE_INTERFACE = [
  {
    name: 'header: string',
    description: 'Se utiliza para definir el encabezado.'
  },
  {
    name: 'body: string',
    description: 'Se utiliza para definir el cuerpo.'
  },
  {
    name: 'footer: string',
    description: 'Se utiliza para definir el pie de página.'
  }
];

export const COLLAPSE_SIMPLE_INTERFACE = `
  interface Collapse {
    title: string;
    description: string;
    icon?: string;
  }
`;

export const COLLAPSE_INFO_INTERFACE = `
  interface CollapseInfo {
    header: string;
    body: string;
    footer: string;
  }
`;

const collapseIdentifier = (identifier: string) => {
  return `
  <o-collapse [expandableContent]="array" identifier="${identifier}"></o-collapse>
  `;
};

export const COLLAPSE_SIMPLE_HTML = collapseIdentifier('collapseOne');

export const COLLAPSE_SIMPLE_HTML_MULTIPLE = `
  <o-collapse
    [expandableContent]="array"
    [isMultipleSelection]="true"
    identifier="collapseTwo"
  ></o-collapse>
`;

export const COLLAPSE_SIMPLE_HTML_ICON = collapseIdentifier('collapseThree');

export const COLLAPSE_ARRAY = [
  {
    title: 'Colapsable',
    description: 'Descripcion de ejemplo'
  },
  {
    title: 'Colapsable',
    description: 'Descripcion de ejemplo'
  },
  {
    title: 'Colapsable',
    description: 'Descripcion de ejemplo'
  }
];

export const COLLAPSE_ICON_ARRAY = COLLAPSE_ARRAY.map((el) => {
  return {
    ...el,
    icon: 'bx bx-sm bxs-user-circle'
  };
});

export const COLLAPSE_SIMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public array = ${codeFormattingArrayList(COLLAPSE_ARRAY)};
    ];
  }
`;

export const COLLAPSE_SIMPLE_ICON_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public array = ${codeFormattingArrayList(COLLAPSE_ICON_ARRAY)};
    ];
  }
`;

export const COLLAPSE_INFO_EXAMPLE_HTML = `
  <o-collapse-info
    title="Total:"
    subtitle="$ 450"
    [expandableContent]="array"
    identifier="collapseOne"
  ></o-collapse-info>
`;

export const COLLAPSE_INFO_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public array = [
      { header: 'BOLETA N° 2564-59879543', body: 'Solicitud de informes varios', footer: '$ 450' },
      { header: 'BOLETA N° 2564-59879543', body: 'Solicitud de informes varios', footer: '$ 450' }
    ];
  }
`;
