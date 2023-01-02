export enum ComponentEnum {
  access = 'Acceso simple',
  accessSimple = 'Acceso simple',
  accessGroup = 'Grupo de accesos',
  accessList = 'Lista de accesos',
  alert = 'Alerta',
  breadcrumb = 'Miga de pan',
  card = 'Tarjeta contenedor',
  cardContainer = 'Tarjeta contenedor',
  cardContainerHorizontal = 'Tarjeta contenedor horizontal',
  cardSimple = 'Tarjeta sin contenedor',
  cardSimpleHorizontal = 'Tarjeta sin contenedor horizontal',
  cardNotice = 'Tarjeta noticia',
  cardEvent = 'Tarjeta evento',
  cardEventSimple = 'Tarjeta evento simple',
  footer = 'Footer',
  progressBar = 'Barra de progreso',
  statusBar = 'Barra de Estados',
  collapse = 'Colapsable',
  modal = 'Modal',
  pagination = 'Paginación',
  table = 'Tabla',
  navigation = 'Navegación horizontal',
  navigationHorizontal = 'Navegación horizontal',
  navigationVertical = 'Navegación vertical',
  option = 'Opciones',
  gallery = 'Galería',
  panel = 'Panel Informativo',
  panelInformation = 'Panel Informativo',
  panelLargeFeatured = 'Panel Destacado Grande',
  panelSmallFeatured = 'Panel Destacado Chico',
  linkList = 'Lista de Enlaces',
  stepsForm = 'Pasos de un formulario',
  dropdown = 'Desplegables'
}

export const COMPONENTS_NAVIGATION = [
  {
    title: 'Accesos',
    route: '/components/access',
    navElements: [
      {
        title: 'Simple',
        route: '/components/access/access-simple'
      },
      {
        title: 'Grupo',
        route: '/components/access/access-group'
      },
      {
        title: 'Lista',
        route: '/components/access/access-list'
      }
    ]
  },
  {
    title: 'Alerta',
    route: '/components/alert'
  },
  {
    title: 'Miga de pan',
    route: '/components/breadcrumb'
  },
  {
    title: 'Tarjetas',
    route: '/components/card',
    navElements: [
      {
        title: 'Con contenedor',
        route: '/components/card/card-container'
      },
      {
        title: 'Con contenedor horizontal',
        route: '/components/card/card-container-horizontal'
      },
      {
        title: 'Sin contenedor',
        route: '/components/card/card-simple'
      },
      {
        title: 'Sin contenedor horizontal',
        route: '/components/card/card-simple-horizontal'
      },
      {
        title: 'Noticia',
        route: '/components/card/card-notice'
      },
      {
        title: 'Evento',
        route: '/components/card/card-event'
      },
      {
        title: 'Evento simple',
        route: '/components/card/card-event-simple'
      }
    ]
  },
  {
    title: 'Footer',
    route: '/components/footer'
  },
  {
    title: 'Barra de progreso',
    route: '/components/progress-bar'
  },
  {
    title: 'Barra de Estado',
    route: '/components/status-bar'
  },
  {
    title: 'Colapsable',
    route: '/components/collapse',
    navElements: [
      {
        title: 'Simple',
        route: '/components/collapse/collapse-simple'
      },
      {
        title: 'Con Información',
        route: '/components/collapse/collapse-info'
      }
    ]
  },
  {
    title: 'Modal',
    route: '/components/modal'
  },
  {
    title: 'Paginación',
    route: '/components/pagination'
  },
  {
    title: 'Tabla',
    route: '/components/table'
  },
  {
    title: 'Opciones',
    route: '/components/option'
  },
  {
    title: 'Galería',
    route: '/components/gallery'
  },
  {
    title: 'Navegación',
    route: '/components/navigation',
    navElements: [
      {
        title: 'Navegación horizontal',
        route: '/components/navigation/navigation-horizontal'
      },
      {
        title: 'Navegación vertical',
        route: '/components/navigation/navigation-vertical'
      }
    ]
  },
  {
    title: 'Panel',
    route: '/components/panel',
    navElements: [
      {
        title: 'Informativo',
        route: '/components/panel/panel-information'
      },
      {
        title: 'Destacado Grande',
        route: '/components/panel/panel-large-featured'
      },
      {
        title: 'Destacado Chico',
        route: '/components/panel/panel-small-featured'
      }
    ]
  },
  {
    title: 'Lista de Enlaces',
    route: '/components/link-list'
  },
  {
    title: 'Pasos de un formulario',
    route: '/components/steps-form'
  },
  {
    title: 'Desplegables',
    route: '/components/dropdown'
  }
];

export const COLUMNS = [
  {
    key: 'name',
    value: 'Nombre'
  },
  {
    key: 'description',
    value: 'Descripción'
  }
];

export const SIZES = `
  type Sizes = "sm" | "md" | "lg";
`;

export const COLORS = `
  type Colors = 'primary' | 'success' | 'danger' | 'info';
`;

COMPONENTS_NAVIGATION.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
