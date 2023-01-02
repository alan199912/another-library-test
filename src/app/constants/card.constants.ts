const CARD_ROUTE = 'card';
const CARD_CONTAINER_ROUTE = 'card/card-container';
const CARD_CONTAINER_HORIZONTAL_ROUTE = 'card/card-container-horizontal';
const CARD_EVENT_ROUTE = 'card/card-event';
const CARD_EVENT_SIMPLE_ROUTE = 'card/card-event-simple';
const CARD_NOTICE_ROUTE = 'card/card-notice';
const CARD_SIMPLE_ROUTE = 'card/card-simple';
const CARD_SIMPLE_HORIZONTAL_ROUTE = 'card/card-simple-horizontal';

export const CARD_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/card/overview'
  },
  {
    title: 'Api',
    route: '/components/card/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/card/examples'
  }
];

export const CARD_CONTAINER_NAVIGATION = CARD_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(CARD_ROUTE, CARD_CONTAINER_ROUTE)
  };
});

export const CARD_CONTAINER_HORIZONTAL_NAVIGATION = CARD_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(CARD_ROUTE, CARD_CONTAINER_HORIZONTAL_ROUTE)
  };
});

export const CARD_EVENT_NAVIGATION = CARD_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(CARD_ROUTE, CARD_EVENT_ROUTE)
  };
});

export const CARD_EVENT_SIMPLE_NAVIGATION = CARD_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(CARD_ROUTE, CARD_EVENT_SIMPLE_ROUTE)
  };
});

export const CARD_NOTICE_NAVIGATION = CARD_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(CARD_ROUTE, CARD_NOTICE_ROUTE)
  };
});

export const CARD_SIMPLE_NAVIGATION = CARD_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(CARD_ROUTE, CARD_SIMPLE_ROUTE)
  };
});

export const CARD_SIMPLE_HORIZONTAL_NAVIGATION = CARD_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(CARD_ROUTE, CARD_SIMPLE_HORIZONTAL_ROUTE)
  };
});

export const CARD_BEST_PRACTICES = [
  '<strong>Son a menudo un conjunto o resumen</strong> de una idea más grande.',
  '<strong>Suelen ser miembros de una colección de contenedores similares,</strong> y no una sola tarjeta aislada.',
  '<strong>Se usan de manera modular,</strong> esto significa que pueden variar el orden en una colección sin romper el significado de ninguna tarjeta individual.',
  '<strong>Son accionables</strong> ya que se utilizan como un resumen de información más detallada, la cual debe vincularse a esa información.',
  '<strong>Establece una expectativa</strong> de lo que sucede cuando un usuario interactúa con ellas.',
  '<strong>Los títulos son cortos</strong> de entre 8 a 12 palabras como recomendación, o el equivalente a 2 líneas de texto, y se enfocan en el valor que alguien obtendrá al interactuar con la tarjeta.',
  '<strong>Los textos que acompañan como bajada son breves,</strong> alrededor de 15 a 20 palabras, o el equivalente a 3 líneas de texto, complementando el título con un contexto más profundo.'
];

export const CARD_BAD_PRACTICES = [
  '<strong>No repetir imágenes, iconos, o contenido</strong> a todas o la mayoría de las tarjetas de una colección. Esto hace que sea más difícil distinguirlas entre sí.',
  '<strong>No mezclar tarjetas de un diferente tipo</strong> en una misma sección.'
];

export const CARD_CONTAINER_EXAMPLE_ICON = `
  <o-card-container
    title="Título de tarjeta"
    text="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
  >
    <i icon class="bx bxs-user-circle card-icon"></i>
  </o-card-container>
`;

export const CARD_CONTAINER_EXAMPLE_NO_ICON = `
  <o-card-container
    title="Título de tarjeta"
    text="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
  ></o-card-container>
`;

export const CARD_CONTAINER_EXAMPLE_TITLE = `
  <o-card-container
    title="Título de tarjeta"
    route="/components"
  ></o-card-container>
`;

export const CARD_CONTAINER_EXAMPLE_AUDIO = `
  <o-card-container
    title="Título de tarjeta"
    text="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
  >
    <i icon class="bx bxs-user-circle card-icon"></i>
    <audio audio class="w-100" controls="">
      <source
        src="https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
        type="audio/ogg"
      />
      Your browser does not support the audio tag.
    </audio>
  </o-card-container>
`;

export const CARD_CONTAINER_HORIZONTAL_EXAMPLE_MEDIUM = `
  <o-card-container-horizontal
    title="Título de tarjeta"
    text="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    img="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
  ></o-card-container-horizontal>
`;

export const CARD_CONTAINER_HORIZONTAL_EXAMPLE_BIG = `
  <o-card-container-horizontal
    title="Título de tarjeta"
    text="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    img="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
    [isBig]="true"
  ></o-card-container-horizontal>
`;

export const CARD_CONTAINER_HORIZONTAL_EXAMPLE_ICON = `
  <o-card-container-horizontal
    title="Título del acceso"
    text="Descripción del acceso"
    route="/components"
  >
    <i icon class="bx bx-file card-icon-left"></i>
  </o-card-container-horizontal>
`;

export const CARD_CONTAINER_HORIZONTAL_EXAMPLE_ICON_UNBORDERED = `
  <o-card-container-horizontal
    title="Título del acceso"
    text="Descripción del acceso"
    [isUnbordered]="true"
    route="/components"
  >
    <i icon class="bx bx-file card-icon-left"></i>
  </o-card-container-horizontal>
`;

export const CARD_SIMPLE_EXAMPLE_ICON = `
  <o-card-simple
    title="Título de tarjeta"
    text="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    >
    <i icon class="bx bxs-user-circle card-icon"></i>
  </o-card-simple>
`;

export const CARD_SIMPLE_EXAMPLE_NO_ICON = `
  <o-card-simple
    title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
    route="/components"
  ></o-card-simple>
`;

export const CARD_SIMPLE_EXAMPLE_TITLE = `
  <o-card-simple
    title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
    route="/components"
  ></o-card-simple>
`;

export const CARD_SIMPLE_HORIZONTAL_EXAMPLE = `
  <o-card-simple-horizontal
    title="Título de tarjeta"
    text="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    img="https://gcba.github.io/Obelisco/cards/ciudad.jpg"
    >
  </o-card-simple-horizontal>
`;

export const CARD_NOTICE_EXAMPLE_HTML = `
  <o-card-notice
    title="Título de tarjeta"
    text="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    img="https://gcba.github.io/Obelisco/cards/evento.jpg"
    [tags]="tags"
    [datePublication]="date"
    >
  </o-card-notice>
`;

export const CARD_NOTICE_AUDIO_EXAMPLE_HTML = `
  <o-card-notice
    title="Título de tarjeta"
    text="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    img="https://gcba.github.io/Obelisco/cards/evento.jpg"
    [tags]="tags"
    [datePublication]="date"
    >
      <audio audio class="audio-event w-100" controls="">
        <source
          src="https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
          type="audio/ogg"
        />
        Your browser does not support the audio tag.
      </audio>
  </o-card-notice>
`;

export const CARD_NOTICE_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public tags = ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3'];
    public date = new Date();
  }
`;

export const CARD_EVENT_EXAMPLE_HTML = `
  <o-card-event
    title="Comienza una nueva edición de actividades en polideportivos"
    eventName="Actividades y clases en polideportivos"
    [initialDate]="initialDate"
    [finalDate]="finalDate"
    img="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
    imgEvent="https://gcba.github.io/Obelisco/cards/paseobajo-thumb.png"
    route="/components"
  ></o-card-event>
`;

export const CARD_EVENT_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public initialDate = new Date('January 18');
    public finalDate = new Date('February 1');
  }
`;

export const CARD_EVENT_SIMPLE_EXAMPLE_HTML = `
  <o-card-event-simple
    title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
    text="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    img="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
    [date]="date"
    [hours]="hours"
    route="/components"
  ></o-card-event-simple>
`;

export const CARD_EVENT_SIMPLE_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public date = new Date();
    public hours = [20, 21, 22];
  }
`;
