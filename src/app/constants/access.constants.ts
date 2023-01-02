import { codeFormattingArrayList, codeFormattingObject } from '../core/helpers/codeFormatting.helper';

const formattedExampleSimpleAccessTsCode = (code: any) => `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public accessList = ${codeFormattingArrayList(code)}
    ];
  }
`;

const formattedExampleAccessObjectTsCode = (code: any) => `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public accessItem = ${codeFormattingObject(code)}
  }
`;

const formattedExampleAccessListTsCode = (code: any, code2: any) => `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public accessList = ${codeFormattingArrayList(code)}
    ];

    public accessItem = ${codeFormattingObject(code2)}
  }
`;

const formattedExampleAccessCategoryTsCode = (code: any) => `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public accessCategoryItems = [
      {
        name: 'Categoría 1',
        access: [
          {
            title: 'Acceso chico',
            route: '/alerta'
          },
          {
            title: 'Acceso chico',
            route: '/galeria'
          }
        ]
      },
      {
        name: 'Categoría 2  ',
        access: [
          {
            title: 'Acceso chico',
            route: '/alerta'
          },
          {
            title: 'Acceso chico',
            route: '/galeria'
          }
        ]
      }
    ];

    public accessItem = ${codeFormattingObject(code)}
  }
`;

const formattedExampleAccessCategoryIconTsCode = (code: any) => `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public accessCategoryItems = [
      {
        name: 'Categoría 1',
        access: [
          {
            title: 'Acceso chico',
            route: '/alerta',
            icon: 'bx bx-sm bxl-facebook-circle'
          },
          {
            title: 'Acceso chico',
            route: '/galeria',
            icon: 'bx bx-sm bxl-instagram'
          }
        ]
      },
      {
        name: 'Categoría 2  ',
        access: [
          {
            title: 'Acceso chico',
            route: '/alerta'
          },
          {
            title: 'Acceso chico',
            route: '/galeria'
          }
        ]
      }
    ];

    public accessItem = ${codeFormattingObject(code)}
  }
`;

function shortenArray(array: any[]) {
  return [...array].splice(array.length - 2, 2);
}

function renameAccessList(name: string) {
  return [
    {
      title: 'Acceso ' + name,
      route: '/alerta'
    },
    {
      title: 'Acceso ' + name,
      route: '/galeria'
    },
    {
      title: 'Acceso ' + name,
      route: '/panel'
    },
    {
      title: 'Acceso ' + name,
      route: '/tabla'
    }
  ];
}

function renameAccessIconList(name: string) {
  return [
    {
      title: 'Acceso ' + name,
      route: '/alerta',
      icon: 'bx bx-sm bxl-facebook-circle'
    },
    {
      title: 'Acceso ' + name,
      route: '/galeria',
      icon: 'bx bx-sm bxl-instagram'
    },
    {
      title: 'Acceso ' + name,
      route: '/panel',
      icon: 'bx bx-sm bxl-twitter'
    },
    {
      title: 'Acceso ' + name,
      route: '/tabla',
      icon: 'bx bx-sm bxl-youtube'
    }
  ];
}

const ACCESS_ROUTE = 'access';
const ACCESS_SIMPLE_ROUTE = 'access/access-simple';
const ACCESS_GROUP_ROUTE = 'access/access-group';
const ACCESS_LIST_ROUTE = 'access/access-list';

export const ACCESS_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/access/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/access/examples'
  }
];

export const ACCESS_SIMPLE = ACCESS_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(ACCESS_ROUTE, ACCESS_SIMPLE_ROUTE)
  };
});

export const ACCESS_GROUP = ACCESS_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(ACCESS_ROUTE, ACCESS_GROUP_ROUTE)
  };
});

export const ACCESS_LIST = ACCESS_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(ACCESS_ROUTE, ACCESS_LIST_ROUTE)
  };
});

export const ACCESS_SIMPLE_BEST_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const ACCESS_SIMPLE_BAD_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const ACCESS_LIST_BEST_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const ACCESS_LIST_BAD_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const ACCESS_GROUP_BEST_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const ACCESS_GROUP_BAD_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const ACCESS_SIMPLE_DATA_SOURCE = [
  {
    name: '@Input() <br /> accessList: Access[]',
    description: 'Se utiliza para definir la lista de accesos que se mostrarán en el componente.'
  },
  {
    name: '@Input() <br /> isBig: boolean',
    description:
      'Se utiliza para definir si se mostrará el componente en su versión grande. Por defecto es <strong>false</strong>.'
  },
  {
    name: '@Input() <br />  isCard: boolean',
    description:
      'Se utiliza para definir si se mostrará el componente en su versión de tarjeta. Por defecto es <strong>false</strong>.'
  },
  {
    name: '@Input() <br />  isDescriptive: boolean',
    description:
      'Se utiliza para definir si se mostrará el componente en su versión descriptiva. Por defecto es <strong>false</strong>.'
  },
  {
    name: '@Input() <br />  isHorizontal: boolean',
    description:
      'Se utiliza para definir si se mostrará el componente en su versión horizontal. Por defecto es <strong>false</strong>.'
  }
];

export const ACCESS_LIST_DATA_SOURCE = [
  {
    name: '@Input() <br /> title: string',
    description: 'Se utiliza para definir el título del componente.'
  },
  {
    name: '@Input() <br /> description: string',
    description: 'Se utiliza para definir la descripción del componente.'
  },
  {
    name: '@Input() <br /> access: Access',
    description: 'Se utiliza para definir el acceso grande que se mostrará por debajo de la lista de accesos.'
  },
  {
    name: '@Input() <br /> accessElements: Access[]',
    description: 'Se utiliza para definir la lista de accesos que se mostrarán en el componente.'
  },
  {
    name: '@Input() <br /> accessCategoryElements: AccessCategory[]',
    description: 'Se utiliza para definir la lista de categorías de accesos que se mostrarán en el componente.'
  }
];

export const ACCESS_GROUP_DATA_SOURCE = [
  {
    name: '@Input() <br /> title: string',
    description: 'Se utiliza para definir el título del componente.'
  },
  {
    name: '@Input() <br /> description: string',
    description: 'Se utiliza para definir la descripción del componente.'
  },
  {
    name: '@Input() <br /> access: AccessGroup',
    description: 'Se utiliza para definir el acceso que se mostrará en el componente.'
  },
  {
    name: '@Input() <br /> isReverse: boolean',
    description:
      'Se utiliza para definir si se mostrará el componente en su versión invertida. Por defecto es <strong>false</strong>.'
  }
];

export const ACCESS_INTERFACE_DATA_SOURCE = [
  {
    name: 'title: string',
    description: 'Se utiliza para definir el título del acceso.'
  },
  {
    name: 'description: string',
    description: 'Se utiliza para definir la descripción del acceso.'
  },
  {
    name: 'route: string',
    description: 'Se utiliza para definir la ruta del acceso, mediante el routerLink de Angular.'
  },
  {
    name: 'link: string',
    description: 'Se utiliza para definir el link del acceso., mediante el href de HTML.'
  },
  {
    name: 'isLogOut: boolean',
    description: 'Se utiliza para definir si se mostrará el botón de cerrar sesión.'
  },
  {
    name: 'icon: string',
    description: 'Se utiliza para definir el icono del acceso. <br /> Se debe utilizar clases de boxicons.'
  }
];

export const ACCESS_GROUP_INTERFACE_DATA_SOURCE = ACCESS_INTERFACE_DATA_SOURCE.filter((item, index) => index !== 1);

export const ACCESS_CATEGORY_INTERFACE_DATA_SOURCE = [
  {
    name: 'name: string',
    description: 'Se utiliza para definir el nombre de la categoría.'
  },
  {
    name: 'access: Access[]',
    description: 'Se utiliza para definir la lista de accesos que se mostrarán en la categoría.'
  }
];

export const ACCESS_INTERFACE = `
  interface Access {
    title: string;
    description?: string;
    route?: string;
    link?: string;
    isLogOut?: boolean;
    icon?: string;
  }
`;

export const ACCESS_GROUP_TYPE = `
  type AccessGroup = Omit<Access, 'description'>
`;

export const ACCESS_CATEGORY_INTERFACE = `
  interface AccessCategory {
    name: string;
    access: Access[];
  }
`;

export const ACCESS_LIST_ITEMS = renameAccessList('chico');
export const ACCESS_ICON_LIST_ITEMS = renameAccessIconList('chico');
export const ACCESS_LIST_DESCTIPTION_SHORT_ITEMS = renameAccessList('chico')
  .map((e) => ({
    ...e,
    description: 'Descripción'
  }))
  .slice(0, 1);

export const ACCESS_LIST_DESCTIPTION_ITEMS = ACCESS_LIST_ITEMS.map((e) => ({
  ...e,
  description: 'Descripción'
}));

export const ACCESS_BIG_LIST_ITEMS = renameAccessList('grande');

export const ACCESS_LOG_OUT = [
  {
    title: 'Cerrar sesión',
    route: '/home',
    isLogOut: true
  }
];

export const ACCESS_CATEGORY_ITEMS = [
  {
    name: 'Categoría 1',
    access: shortenArray(ACCESS_LIST_ITEMS)
  },
  {
    name: 'Categoría 2',
    access: shortenArray(ACCESS_LIST_ITEMS)
  }
];

export const ACCESS_CATEGORY_ICON_ITEMS = [
  {
    name: 'Categoría 1',
    access: shortenArray(ACCESS_ICON_LIST_ITEMS)
  },
  {
    name: 'Categoría 2',
    access: shortenArray(ACCESS_ICON_LIST_ITEMS)
  }
];

export const ACCESS_ITEM = {
  title: 'Acceso grande',
  route: '/home'
};

export const ACCESS_VERTICAL_EXAMPLE_HTML = `
  <o-access [accessList]="accessList"></o-access>
`;

export const ACCESS_HORIZONTAL_EXAMPLE_HTML = `
  <o-access [accessList]="accessList" [isHorizontal]="true"></o-access>
`;

export const ACCESS_BIG_EXAMPLE_HTML = `
  <o-access [accessList]="accessList" [isHorizontal]="true" [isBig]="true"></o-access>
`;

export const ACCESS_GROUP_EXAMPLE_HTML = `
  <o-access-group title="Título" description="Bajada" [access]="accessItem"></o-access-group>
`;

export const ACCESS_GROUP_WITH_ICON_EXAMPLE_HTML = `
  <o-access-group title="Título" description="Bajada" [access]="accessItem">
    <i icon class="bx bxs-shield-x card-access-icon"></i>
  </o-access-group>
`;

export const ACCESS_GROUP_REVERSE_EXAMPLE_HTML = `
  <o-access-group title="Título" description="Bajada" [access]="accessItem" [isReverse]="true">
    <i icon class="bx bxs-shield-x card-access-icon"></i>
  </o-access-group>
`;

export const ACCESS_LIST_EXAMPLE_HTML = `
  <o-access-list
    title="Título"
    description="Bajada"
    [accessElements]="accessList"
  ></o-access-list>
`;

export const ACCESS_LIST_WITH_BOTTON_ACCESS_EXAMPLE_HTML = `
  <o-access-list
    title="Título"
    description="Bajada"
    [accessElements]="accessList"
    [access]="accessItem"
  >
  </o-access-list>
`;

export const ACCESS_LIST_WITH_ICON_EXAMPLE_HTML = `
  <o-access-list
    title="Título"
    description="Bajada"
    [accessElements]="accessList"
    [access]="accessItem"
  >
    <span icon class="card-access-icon descriptive">Nº</span>
  </o-access-list>
`;

export const ACCESS_LIST_WITH_CATEGORIES_EXAMPLE_HTML = `
  <o-access-list
    title="Título"
    description="Bajada"
    [accessCategoryElements]="accessCategoryItems"
    [access]="accessItem"
  >
    <span icon class="card-access-icon descriptive">Nº</span>
  </o-access-list>
`;

export const ACCESS_VERTICAL_EXAMPLE_TS = formattedExampleSimpleAccessTsCode(ACCESS_LIST_ITEMS);
export const ACCESS_ICON_EXAMPLE_TS = formattedExampleSimpleAccessTsCode(ACCESS_ICON_LIST_ITEMS);
export const ACCESS_HORIZONTAL_EXAMPLE_TS = formattedExampleSimpleAccessTsCode(ACCESS_LIST_ITEMS);
export const ACCESS_BIG_EXAMPLE_TS = formattedExampleSimpleAccessTsCode(ACCESS_BIG_LIST_ITEMS);
export const ACCESS_LOG_OUT_EXAMPLE_TS = formattedExampleSimpleAccessTsCode(ACCESS_LOG_OUT);
export const ACCESS_DESCRIPTION_EXAMPLE_TS = formattedExampleSimpleAccessTsCode(ACCESS_LIST_DESCTIPTION_SHORT_ITEMS);

export const ACCESS_GROUP_EXAMPLE_TS = formattedExampleAccessObjectTsCode(ACCESS_ITEM);
export const ACCESS_GROUP_WITH_ICON_EXAMPLE_TS = formattedExampleAccessObjectTsCode(ACCESS_ITEM);
export const ACCESS_GROUP_REVERSE_EXAMPLE_TS = formattedExampleAccessObjectTsCode(ACCESS_ITEM);

export const ACCESS_LIST_EXAMPLE_TS = formattedExampleSimpleAccessTsCode(ACCESS_LIST_ITEMS);
export const ACCESS_LIST_WITH_BOTTOM_ACCESS_EXAMPLE_TS = formattedExampleAccessListTsCode(
  ACCESS_LIST_ITEMS,
  ACCESS_ITEM
);
export const ACCESS_LIST_WITH_ICON_EXAMPLE_TS = formattedExampleAccessListTsCode(ACCESS_ICON_LIST_ITEMS, ACCESS_ITEM);
export const ACCESS_LIST_DESCRIPTION_WITH_ICON_EXAMPLE_TS = formattedExampleAccessListTsCode(
  ACCESS_LIST_DESCTIPTION_ITEMS,
  ACCESS_ITEM
);
export const ACCESS_LIST_WITH_CATEGORIES_EXAMPLE_TS = formattedExampleAccessCategoryTsCode(ACCESS_ITEM);
export const ACCESS_LIST_WITH_CATEGORIES_ICON_EXAMPLE_TS = formattedExampleAccessCategoryIconTsCode(ACCESS_ITEM);
