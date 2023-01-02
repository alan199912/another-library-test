import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';

const PANEL_ROUTE = 'panel';
const PANEL_INFORMATION_ROUTE = 'panel/panel-information';
const PANEL_LARGE_FEATURED_ROUTE = 'panel/panel-large-featured';
const PANEL_SMALL_FEATURED_ROUTE = 'panel/panel-small-featured';

export const PANEL_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/panel/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/panel/examples'
  }
];

export const PANEL_INFORMATION_NAVIGATION = PANEL_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(PANEL_ROUTE, PANEL_INFORMATION_ROUTE)
  };
});

export const PANEL_LARGE_FEATURED_NAVIGATION = PANEL_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(PANEL_ROUTE, PANEL_LARGE_FEATURED_ROUTE)
  };
});

export const PANEL_SMALL_FEATURED_NAVIGATION = PANEL_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(PANEL_ROUTE, PANEL_SMALL_FEATURED_ROUTE)
  };
});

export const PANEL_INFORMATION_DATA_SOURCE = [
  {
    name: '@Input() </br > panelList: PanelInformationItem[]',
    description: 'Se utiliza para definir la lista de paneles que se mostrarán en el componente.'
  }
];

export const PANEL_LARGE_FEATURED_DATA_SOURCE = [
  {
    name: '@Input() </br > title: string',
    description: 'Se utiliza para definir el título del panel.'
  },
  {
    name: '@Input() </br > description: string',
    description: 'Se utiliza para definir la descripción del panel.'
  },
  {
    name: '@Input() </br > url: string',
    description: 'Se utiliza para definir la url de la imagen o video del panel.'
  },
  {
    name: '@Input() </br > isVideo: boolean',
    description: 'Se utiliza para definir si el panel es un video.'
  },
  {
    name: '@Input() </br > isVertical: boolean',
    description: 'Se utiliza para definir si el panel es vertical.'
  }
];

export const PANEL_SMALL_FEATURED_DATA_SOURCE = [
  {
    name: '@Input() </br > title: string',
    description: 'Se utiliza para definir el título del panel.'
  },
  {
    name: '@Input() </br > description: string',
    description: 'Se utiliza para definir la descripción del panel.'
  },
  {
    name: '@Input() </br > image: string',
    description: 'Se utiliza para definir la url de la imagen del panel.'
  }
];

export const PANEL_INFORMATION_BEST_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const PANEL_INFORMATION_BAD_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const PANEL_LARGE_FEATURED_BEST_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const PANEL_LARGE_FEATURED_BAD_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const PANEL_SMALL_FEATURED_BEST_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const PANEL_SMALL_FEATURED_BAD_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const PANEL_INFORMATION_INTERFACE = `
  interface PanelInformationItem {
    title: string;
    description: string;
    image: string;
  }
`;

export const PANEL_INFORMATION_INTERFACE_DATA_SOURCE = [
  {
    name: 'title: string',
    description: 'Se utiliza para definir el título del panel.'
  },
  {
    name: 'description: string',
    description: 'Se utiliza para definir la descripción del panel.'
  },
  {
    name: 'image: string',
    description: 'Se utiliza para definir la url de la imagen del panel.'
  }
];

export const PANEL_INFORMATION_LIST = [
  {
    title: 'Plataformas digitales',
    description: 'Mantenemos las plataformas y damos soporte a las áreas de gobierno.',
    image: 'assets/panel/Icono1.svg'
  },
  {
    title: 'Experiencia Digital',
    description: 'Diseñamos estrategias y productos digitales para mejorar la experiencia de los vecinos.',
    image: 'assets/panel/Icono3.svg'
  },
  {
    title: 'Sistema de atención integral',
    description: 'Asistencia ante emergencias y desastres.',
    image: 'assets/panel/Icono2.svg'
  },
  {
    title: 'Trámites en línea',
    description: 'Gestioná trámites y solicitudes.',
    image: 'assets/panel/Icono4.svg'
  }
];

export const PANEL_INFORMATION_EXAMPLE_HTML = `
  <o-information-panel [panelList]="panelInformationList"></o-information-panel>
`;

const formattedPanelInformationExampleTsCode = (code: any) => `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public panelInformationList = ${codeFormattingArrayList(code)}
    ];
  }
`;

export const PANEL_INFORMATION_EXAMPLE_TS = formattedPanelInformationExampleTsCode(PANEL_INFORMATION_LIST);

export const PANEL_LARGE_IMAGE_HORIZONTAL_EXAMPLE_HTML = `
  <o-large-featured-panel
    title="Encabezado"
    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Suscipit nostrum quo animi dignissimos omnis dicta quia placeat,
      nesciunt quasi hic autem iure eum necessitatibus ea expedita quas."
    url="https://raw.githubusercontent.com/gcba/Obelisco/master/static/panel/larreta.jpg"
  >
    <button type="button" class="btn btn-lg btn-primary card-link">Botón</button>
    <button type="button" class="btn btn-lg btn-secondary card-link">Botón</button>
  </o-large-featured-panel>
  `;

export const PANEL_LARGE_IMAGE_HORIZONTAL_DOWNLOAD_BUTTON_EXAMPLE_HTML = `
  <o-large-featured-panel
    title="Encabezado"
    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Suscipit nostrum quo animi dignissimos omnis dicta quia placeat,
      nesciunt quasi hic autem iure eum necessitatibus ea expedita quas."
    url="https://raw.githubusercontent.com/gcba/Obelisco/master/static/panel/larreta.jpg"
  >
    <a class="btn btn-secondary btn-lg download-link" href="panel/larreta.jpg" download="">Descargar</a>
  </o-large-featured-panel>
  `;

export const PANEL_LARGE_IMAGE_HORIZONTAL_DOWNLOAD_LINK_EXAMPLE_HTML = `
  <o-large-featured-panel
    title="Encabezado"
    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Suscipit nostrum quo animi dignissimos omnis dicta quia placeat,
      nesciunt quasi hic autem iure eum necessitatibus ea expedita quas."
    url="https://raw.githubusercontent.com/gcba/Obelisco/master/static/panel/larreta.jpg"
  >
    <a class="download" href="panel/larreta.jpg" download="">Descargar</a>
  </o-large-featured-panel>
  `;

export const PANEL_LARGE_VIDEO_HORIZONTAL_EXAMPLE_HTML = `
  <o-large-featured-panel
    title="Encabezado"
    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Suscipit nostrum quo animi dignissimos omnis dicta quia placeat,
      nesciunt quasi hic autem iure eum necessitatibus ea expedita quas."
    url="https://raw.githubusercontent.com/gcba/Obelisco/master/static/panel/larreta.mp4"
    [isVideo]="true"
  >
    <button type="button" class="btn btn-lg btn-primary card-link">Botón</button>
    <button type="button" class="btn btn-lg btn-secondary card-link">Botón</button>
  </o-large-featured-panel>
  `;

export const PANEL_LARGE_IMAGE_VERTICAL_EXAMPLE_HTML = `
  <o-large-featured-panel
    title="Encabezado"
    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Suscipit nostrum quo animi dignissimos omnis dicta quia placeat,
      nesciunt quasi hic autem iure eum necessitatibus ea expedita quas."
    url="https://raw.githubusercontent.com/gcba/Obelisco/master/static/panel/larreta.jpg"
    [isVertical]="true"
  >
    <button type="button" class="btn btn-lg btn-primary card-link">Botón</button>
    <button type="button" class="btn btn-lg btn-secondary card-link">Botón</button>
  </o-large-featured-panel>
  `;

export const PANEL_LARGE_VIDEO_VERTICAL_EXAMPLE_HTML = `
  <o-large-featured-panel
    title="Encabezado"
    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Suscipit nostrum quo animi dignissimos omnis dicta quia placeat,
      nesciunt quasi hic autem iure eum necessitatibus ea expedita quas."
    url="https://raw.githubusercontent.com/gcba/Obelisco/master/static/panel/larreta.mp4"
    [isVertical]="true"
    [isVideo]="true"
  >
    <button type="button" class="btn btn-lg btn-primary card-link">Botón</button>
    <button type="button" class="btn btn-lg btn-secondary card-link">Botón</button>
  </o-large-featured-panel>
  `;

export const PANEL_SMALL_WITH_BUTTONS_EXAMPLE_HTML = `
  <o-small-featured-panel
    title="Título de tarjeta"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    image="https://raw.githubusercontent.com/gcba/Obelisco/master/static/cards/paseobajo-wide.png"
  >
    <button type="button" class="btn btn-secondary btn-sm card-link">Acción 1</button>
    <button type="button" class="btn btn-link btn-sm card-link">Acción 2</button>
  </o-small-featured-panel>
`;

export const PANEL_SMALL_WITH_LINK_EXAMPLE_HTML = `
  <o-small-featured-panel
    title="Título de tarjeta"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    image="https://raw.githubusercontent.com/gcba/Obelisco/master/static/cards/paseobajo-wide.png"
  >
    <a class="" href="#" target="_blank" rel="noreferrer">Enlace</a>
  </o-small-featured-panel>
`;
