export const PAGINATION_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/pagination/overview'
  },
  {
    title: 'Api',
    route: '/components/pagination/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/pagination/examples'
  }
];

export const PAGINATION_BEST_PRACTICES = [
  '<strong>Visión general:</strong> generalmente, se usa si hay más de 25 elementos mostrados en una vista, comúnmente en listados de tablas, resultados de búsqueda y directorios.',
  '<strong>Destaque la página actual</strong> para mostrar en dónde se encuentra el usuario en relación con toda la colección de páginas.',
  '<strong>Incluya siempre la primera página,</strong> la anterior y la siguiente. Los usuarios siempre deben poder navegar a cada una de estas páginas desde cualquier página del conjunto.',
  '<strong>Cada página del control de paginación es un enlace</strong> de botón que les permite navegar rápidamente por los resultados.'
];

export const PAGINATION_BAD_PRACTICES = [
  '<strong>No divida los elementos en varias líneas,</strong> muestre los elementos de navegación en una sola línea para que sea más fácil de comprender y seleccionar.'
];

export const PAGINATION_EXAMPLE_HTML = `
  <o-pagination
    [totalPages]="10"
    [actualPage]="5"
    ariaLabel="Primer ejemplo de paginación simple"
    (currentPage)="actualPage($event)"
  ></o-pagination>
`;

export const PAGINATION_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public actualPage(event: number): void {
      console.log(event);
    }
  }
`;
