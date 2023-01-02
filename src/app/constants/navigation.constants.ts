import { codeFormattingArrayList } from 'src/core/helpers/codeFormatting.helper';

/**
 * está para obtener un solo array de navigation_simple_ts_array
 */
function shortenArray(array: any[]) {
  return [...array].splice(array.length - 3, 1);
}

const formattedExampleTsCode = (code: any) => `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public array = ${codeFormattingArrayList(code)}
    ];
  }`;

export const codeFormattingNavigationLevel2 = (code: any) =>
  JSON.stringify(code, null, 6)
    .replace('"navElements"', 'navElements')
    .replace(/ {8}/g, '    ')
    .replace(/  {2}/g, '   ')
    .replace(/"+[a-z]+":/gm, (match) => match.replace(/"/g, ''))
    .replace(/]$/, '    ];')
    .trim();

export const codeFormattingNavigationLevel3 = (code: any) =>
  JSON.stringify(code, null, 6)
    .replace('"navElements"', 'navElements')
    .replace('"navElements"', 'navElements')
    .replace(/ {8}/g, '    ')
    .replace(/  {2}/g, '   ')
    .replace(/"+[a-z]+":/gm, (match) => match.replace(/"/g, ''))
    .replace(/]$/, '    ];');

const NAVIGATION_ROUTE = 'navigation';
const NAVIGATION_HORIZONTAL_ROUTE = 'navigation/navigation-horizontal';
const NAVIGATION_VERTICAL_ROUTE = 'navigation/navigation-vertical';

export const NAVIGATIONS_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/navigation/overview'
  },
  {
    title: 'Api',
    route: '/components/navigation/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/navigation/examples'
  }
];

export const NAVIGATION_VERTICAL_DATA_SOURCE = [
  {
    name: '@Input() <br/> navItems: NavVerticalItems[]',
    description: 'Se utiliza para definir los items del menú.'
  }
];

export const NAVIGATION_HORIZONTAL_DATA_SOURCE = [
  {
    name: '@Input() <br/> navItems: NavItems[]',
    description: 'Se utiliza para definir los items del menú.'
  },
  {
    name: '@Input() <br/> isBordered: boolean',
    description: 'Se utiliza para definir si el menú tendrá borde.'
  },
  {
    name: '@Input() <br/> size: Sizes',
    description: 'Se utiliza para definir el tamaño del menú.'
  }
];

export const NAVIGATION_HORIZONTAL_INTERFACE_DATA_SOURCE = [
  {
    name: 'title: string',
    description: 'Se utiliza para definir el título de la navegacion.'
  },
  {
    name: 'link: string',
    description: 'Se utiliza para definir el link de la navegacion. <br/> Mediante href de HTML.'
  },
  {
    name: 'route: string',
    description: 'Se utiliza para definir la ruta de la navegacion. <br/> Mediante routerLink de Angular.'
  },
  {
    name: 'disabled: boolean',
    description: 'Se utiliza para definir si el item estará deshabilitado.'
  },
  {
    name: 'icon: string',
    description: 'Se utiliza para definir el icono del item. <br /> Se debe utilizar clases de boxicons.'
  }
];

export const NAVIGATION_VERTICAL_INTERFACE_DATA_SOURCE = NAVIGATION_HORIZONTAL_INTERFACE_DATA_SOURCE.concat({
  name: 'navElements?: NavVerticalItems[]',
  description:
    'Se utiliza para definir los niveles, se arman de la misma manera que el nivel 1. <br/> Se pueden anidar hasta 3 niveles.'
}).filter((_, i) => i !== 1);

export const NAVIGATION_HORIZONTAL = NAVIGATIONS_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(NAVIGATION_ROUTE, NAVIGATION_HORIZONTAL_ROUTE)
  };
});

export const NAVIGATION_VERTICAL = NAVIGATIONS_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(NAVIGATION_ROUTE, NAVIGATION_VERTICAL_ROUTE)
  };
});

export const NAVIGATION_HORIZONTAL_BEST_PRACTICES = [
  '<strong>Usar textos cortos en los enlaces de navegación.</strong> Pueden ser textos derivados de los propios títulos de la página. Usar como máximo 2 palabras por enlace de navegación para que no requieran truncamiento. ',
  '<strong>Habilitar el desplazamiento horizontal en responsive</strong> si hay demasiados componentes en la navegación horizontal. ',
  '<strong>La navegación horizontal puede combinarse</strong> con Botones y Desplegables.'
];

export const NAVIGATION_HORIZONTAL_BAD_PRACTICES = [
  '<strong>No mezclar comportamientos en diferentes tipos de navegaciones</strong>, vertical y horizontal. '
];

export const NAVIGATION_VERTICAL_BEST_PRACTICES = [
  '<strong>Usar textos cortos en los enlaces de navegación.</strong> Pueden ser textos derivados de los propios títulos de la página. Usar como máximo 2 palabras por enlace de navegación para que no requieran truncamiento. ',
  '<strong>Utilizar íconos únicamente en los elementos del primer nivel en la navegación vertical.</strong> Cualquier elemento de subnivel siempre debe ser solo de texto para garantizar una jerarquía visual clara.',
  '<strong>Enviar al usuario a la ubicación asociada en los elementos de navegación vertical de nivel superior</strong> y abrir los elementos de navegación de subnivel.',
  '<strong>Abrir únicamente los elementos de navegación de nivel inferior</strong> si los elementos de navegación de nivel superior no tienen una ubicación asociada en la navegación vertical.'
];

export const NAVIGATION_VERTICAL_BAD_PRACTICES = [
  '<strong>No mezclar comportamientos en la misma experiencia</strong> de navegación vertical. '
];

export const NAVIGATION_HORIZONTAL_INTERFACE = `
  interface NavItems {
    title: string;
    link?: string;
    route?: string;
    disabled?: boolean;
    icon?: string;
  }
`;

export const NAVIGATION_VERTICAL_INTERFACE = `
  interface NavVerticalItems {
    title: string;
    route?: string;
    disabled?: boolean;
    icon?: string;
    navElements?: NavVerticalItems[];
  }
`;

//? EXAMPLES HORIZONTAL

export const NAVIGATION_HORIZONTAL_EXAMPLE_SIMPLE_HTML = `
  <o-nav-horizontal
    [navItems]="array"
    size="lg"
  ></o-nav-horizontal>
`;

export const NAVIGATION_HORIZONTAL_EXAMPLE_SIZES = `
  <o-nav-horizontal
    [navItems]="array"
    [isBordered]="true"
    size="sm"
  ></o-nav-horizontal>

  <o-nav-horizontal
    [navItems]="array"
    [isBordered]="true"
    size="md"
  ></o-nav-horizontal>

  <o-nav-horizontal
    [navItems]="array"
    [isBordered]="true"
    size="lg"
  ></o-nav-horizontal>
`;

export const NAVIGATION_HORIZONTAL_EXAMPLE_SIMPLE_BORDER_HTML = `
  <o-nav-horizontal
    [navItems]="array"
    [isBordered]="true"
    size="lg"
  ></o-nav-horizontal>
`;

//? HTML HORIZONTAL

export const NAVIGATION_SIMPLE_TS_ARRAY = [
  {
    title: 'Link',
    route: 'app/views'
  },
  {
    title: 'Active',
    route: '/components/navigation/navigation-horizontal/examples'
  },
  {
    title: 'Disabled',
    route: 'checkout',
    disabled: true
  }
];

export const NAVIGATION_SIMPLE_TS_ARRAY_VERTICAL = NAVIGATION_SIMPLE_TS_ARRAY.map((el) => {
  return {
    ...el,
    route: el.route.replace(NAVIGATION_HORIZONTAL_ROUTE, NAVIGATION_VERTICAL_ROUTE)
  };
});

export const NAVIGATION_EXAMPLE_SIMPLE_TS = formattedExampleTsCode(NAVIGATION_SIMPLE_TS_ARRAY);

export const NAVIGATION_SIZES_HTML = shortenArray(NAVIGATION_SIMPLE_TS_ARRAY);

export const NAVIGATION_EXAMPLE_SIMPLE_SIZES_TS = formattedExampleTsCode(NAVIGATION_SIZES_HTML);

export const NAVIGATION_SIMPLE_ICON_TS = [
  {
    title: 'Link',
    route: 'app/views',
    icon: 'bx bxs-user-circle'
  },
  {
    title: 'Active',
    route: '/components/navigation/navigation-horizontal/examples'
  },
  {
    title: 'Disabled',
    route: 'checkout',
    disabled: true
  }
];

export const NAVIGATION_SIMPLE_ICON_TS_VERTICAL = NAVIGATION_SIMPLE_ICON_TS.map((el) => {
  return {
    ...el,
    route: el.route.replace(NAVIGATION_HORIZONTAL_ROUTE, NAVIGATION_VERTICAL_ROUTE)
  };
});

export const NAVIGATION_EXAMPLE_SIMPLE_ICON_TS = formattedExampleTsCode(NAVIGATION_SIMPLE_ICON_TS);

//* VERTICAL

export const NAVIGATION_VERTICAL_EXAMPLE_HTML = `
  <o-nav-vertical
    [navItems]="array"
  ></o-nav-vertical>
`;

//?VERTICAL TS

export const NAVIGATION_SIMPLE_VERTICAL_TS_ARRAY = [
  {
    title: 'Link',
    route: 'app/views'
  },
  {
    title: 'Active',
    route: '/components/navigation/navigation-vertical/examples'
  },
  {
    title: 'Disabled',
    route: 'checkout',
    disabled: true
  }
];

export const NAVIGATION_EXAMPLE_VERTICAL_SIMPLE_TS = formattedExampleTsCode(NAVIGATION_SIMPLE_VERTICAL_TS_ARRAY);

export const NAVIGATION_SIMPLE_VERTICAL_ICON_TS = [
  {
    title: 'Link',
    route: 'app/views',
    icon: 'bx bxs-user-circle'
  },
  {
    title: 'Active',
    route: '/components/navigation/navigation-vertical/examples'
  },
  {
    title: 'Disabled',
    route: 'checkout',
    disabled: true
  }
];

export const NAVIGATION_EXAMPLE_VERTICAL_SIMPLE_ICON_TS = formattedExampleTsCode(NAVIGATION_SIMPLE_VERTICAL_ICON_TS);

export const NAVIGATION_VERTICAL_LV2_VIEWER = [
  {
    title: 'Categorias',
    route: 'app/views'
  },
  {
    title: 'Locales y comercios',
    route: '/components/navigation/navigation-vertical',
    navElements: [
      {
        title: 'Local Indumentaria y calzado. (Actividades comerciales de venta).',
        route: '/components/navigation/navigation-vertical/examples'
      },
      {
        title: 'Locales gastronómicos: “para llevar/takeaway”',
        route: 'app/custom'
      },
      {
        title: 'Locales de óptica',
        route: 'app/custom'
      },
      {
        title: 'Comercial minorista (excluyendo indumentaria y calzado)',
        route: 'app/custom'
      }
    ]
  },
  {
    title: 'Actividades jurídicas',
    route: 'checkout'
  },
  {
    title: 'Otras actividades',
    route: 'checkout',
    disabled: true
  }
];

export const NAVIGATION_EXAMPLE_VRTICAL_LVL2_TS = formattedExampleTsCode(NAVIGATION_VERTICAL_LV2_VIEWER);

export const NAVIGATION_VERTICAL_EXAMPLE_LV2_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public array = ${codeFormattingNavigationLevel2(NAVIGATION_VERTICAL_LV2_VIEWER)}
  }
`;

export const NAVIGATION_VERTICAL_ICON_LV2_VIEWER = [
  {
    title: 'Categorias',
    route: 'app/views',
    icon: 'bx bxs-user-circle'
  },
  {
    title: 'Locales y comercios',
    route: '/components/navigation/navigation-vertical',
    navElements: [
      {
        title: 'Local Indumentaria y calzado. (Actividades comerciales de venta).',
        route: '/components/navigation/navigation-vertical/examples',
        icon: 'bx bxs-user-circle'
      },
      {
        title: 'Locales gastronómicos: “para llevar/takeaway”',
        route: 'app/custom'
      },
      {
        title: 'Locales de óptica',
        route: 'app/custom'
      },
      {
        title: 'Comercial minorista (excluyendo indumentaria y calzado)',
        route: 'app/custom'
      }
    ]
  },
  {
    title: 'Actividades jurídicas',
    route: 'checkout'
  },
  {
    title: 'Otras actividades',
    route: 'checkout',
    disabled: true
  }
];

export const NAVIGATION_VERTICAL_EXAMPLE_LV2_ICON_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public array = ${codeFormattingNavigationLevel2(NAVIGATION_VERTICAL_ICON_LV2_VIEWER)}
  }
`;

export const NAVIGATION_VERTICAL_LV3_VIEWER = [
  {
    title: 'Categorias',
    route: 'app/views'
  },
  {
    title: 'Locales y comercios',
    route: '/components/navigation',
    navElements: [
      {
        title: 'Local Indumentaria y calzado. (Actividades comerciales de venta).',
        route: 'app/custom'
      },
      {
        title: 'Locales gastronómicos: “para llevar/takeaway”',
        route: '/components/navigation/navigation-vertical',
        navElements: [
          {
            title: 'Con local a la calle',
            route: '/components/navigation/navigation-vertical/examples'
          },
          {
            title: 'Food trucks',
            route: 'app/custom'
          }
        ]
      },
      {
        title: 'Locales de óptica',
        route: 'app/custom'
      },
      {
        title: 'Comercial minorista (excluyendo indumentaria y calzado)',
        route: 'app/custom'
      }
    ]
  },
  {
    title: 'Actividades jurídicas',
    route: 'checkout'
  },
  {
    title: 'Otras actividades',
    route: 'checkout',
    disabled: true
  }
];

export const NAVIGATION_VERTICAL_EXAMPLE_LV3_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public array = ${codeFormattingNavigationLevel3(NAVIGATION_VERTICAL_LV3_VIEWER)}
  }
`;

export const NAVIGATION_VERTICAL_ICON_LV3_VIEWER = [
  {
    title: 'Categorias',
    route: 'app/views',
    icon: 'bx bxs-user-circle'
  },
  {
    title: 'Locales y comercios',
    route: '/components/navigation',
    navElements: [
      {
        title: 'Local Indumentaria y calzado. (Actividades comerciales de venta).',
        route: 'app/custom',
        icon: 'bx bxs-user-circle'
      },
      {
        title: 'Locales gastronómicos: “para llevar/takeaway”',
        route: '/components/navigation/navigation-vertical',
        navElements: [
          {
            title: 'Con local a la calle',
            route: '/components/navigation/navigation-vertical/examples',
            icon: 'bx bxs-user-circle'
          },
          {
            title: 'Food trucks',
            route: 'app/custom'
          }
        ]
      },
      {
        title: 'Locales de óptica',
        route: 'app/custom'
      },
      {
        title: 'Comercial minorista (excluyendo indumentaria y calzado)',
        route: 'app/custom'
      }
    ]
  },
  {
    title: 'Actividades jurídicas',
    route: 'checkout'
  },
  {
    title: 'Otras actividades',
    route: 'checkout',
    disabled: true
  }
];

export const NAVIGATION_VERTICAL_EXAMPLE_ICON_LV3_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public array = ${codeFormattingNavigationLevel3(NAVIGATION_VERTICAL_ICON_LV3_VIEWER)}
  }
`;
