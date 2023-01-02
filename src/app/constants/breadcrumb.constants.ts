export const BREADCRUMB_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/breadcrumb/overview'
  },
  {
    title: 'Api',
    route: '/components/breadcrumb/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/breadcrumb/examples'
  }
];

export const BREADCRUMB_BEST_PRACTICES = [
  '<strong>Use migas de pan para la navegación anidada.</strong> Cada elemento debe actuar como un enlace, excepto el último que se visualiza y refuerza con el nombre de la página.',
  '<strong>Evalúe si sus usuarios necesitan las migas de pan</strong> si está utilizando otros elementos de navegación en la página, como una barra lateral.',
  '<strong>Empiece con la palabra "Inicio"</strong> como primer enlace de las rutas de navegación.'
];

export const DATA_SOURCE_BREADCRUMB_INTERFACE = [
  {
    name: 'actualRoute',
    description: 'Se utiliza para agregar el nombre de la ruta actual al breadcrumb. No va a tener un link.'
  },
  {
    name: 'routes',
    description:
      'Se utiliza para agregar las rutas que se quieren agregar al breadcrumb. Cada ruta puede tener un nombre o un id, también se puede agregar una ruta específica'
  },
  {
    name: 'defaultUrl',
    description:
      'Se utiliza para agregar una url generica al breadcrumb. Para que lo puedan utilizar las <strong>routes</strong>'
  }
];

export const DATA_SOURCE_BREADCRUMB_ROUTE_INTERFACE = [
  {
    name: 'name',
    description: 'Se utiliza para agregar el nombre de la ruta.'
  },
  {
    name: 'id',
    description: 'Se utiliza para agregar el id de la ruta. Si se agrega un id, se va a agregar al final de la url.'
  },
  {
    name: 'url',
    description:
      'Se utiliza para agregar una url específica a la ruta. Si no se agrega una url, toma por defecto la url del breadcrumb.'
  }
];

export const BREADCRUMB_INTERFACE1 = `
  interface Breadcrumb {
    actualRoute: BreadcrumbRoute;
    routes: BreadcrumbRoute[];
    defaultUrl: string;
  }
`;

export const BREADCRUMB_INTERFACE2 = `
  interface BreadcrumbRoute {
    name: string;
    id?: string;
    url?: string;
  }
`;

export const BREADCRUMB_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    constructor(private readonly breadcrumbService: BreadcrumbService) {}

    ngOnInit() {
      this.breadcrumbService.breadcrumb$.next({
        actualRoute: { name: 'ruta actual' },
        routes: [
          { name: 'ruta 1' },
          { name: 'ruta 2', id: '15151' },
          { name: 'ruta 3', url: '/custom-routes' },
          { name: 'ruta 4', id: '525252525', url: '/custom' }
        ],
        defaultUrl: '/url-default'
      });
    }
  }
`;
