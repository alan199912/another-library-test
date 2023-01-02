export const LINK_LIST_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/link-list/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/link-list/examples'
  }
];

export const LINK_LIST_BEST_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const LINK_LIST_BAD_PRACTICES = [
  '<strong>Lorem ipsum dolor,</strong> sit amet consectetur adipisicing elit. Iusto, dolores alias sunt facilis aut vero non asperiores.'
];

export const LINK_LIST_DATA_SOURCE = [
  {
    name: '@Input() <br /> title: string',
    description: 'Se utiliza para establecer el título del componente.'
  },
  {
    name: '@Input() <br /> description: string',
    description: 'Se utiliza para establecer la descripción del componente.'
  },
  {
    name: '@Input() <br /> image: string',
    description: 'Se utiliza para establecer la imagen del componente.'
  }
];

export const LINK_LIST_EXAMPLE_DOWNLOAD_BUTTON_HTML = `
  <o-link-list
    title="Lista de enlaces"
    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    image="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
  >
    <div list-link>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="btn btn-secondary btn-sm download-link card-link" href="#" target="_blank" rel="noreferrer">
        Descargar
      </a>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="btn btn-secondary btn-sm download-link card-link" href="#" target="_blank" rel="noreferrer">
        Descargar
      </a>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="btn btn-secondary btn-sm download-link card-link" href="#" target="_blank" rel="noreferrer">
        Descargar
      </a>
    </div>
  </o-link-list>
`;

export const LINK_LIST_EXAMPLE_LINK_HTML = `
  <o-link-list
    title="Lista de enlaces"
    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    image="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
  >
    <div list-link>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="card-link" href="#" target="_blank" rel="noreferrer">Enlace</a>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="card-link" href="#" target="_blank" rel="noreferrer">Enlace</a>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="card-link" href="#" target="_blank" rel="noreferrer">Enlace</a>
    </div>
  </o-link-list>
`;

export const LINK_LIST_EXAMPLE_DOWNLOAD_LINK_HTML = `
  <o-link-list
    title="Lista de enlaces"
    description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    image="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
  >
    <div list-link>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="download card-link" href="#" target="_blank" rel="noreferrer"> Enlace </a>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="download card-link" href="#" target="_blank" rel="noreferrer"> Enlace </a>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="download card-link" href="#" target="_blank" rel="noreferrer"> Enlace </a>
    </div>
  </o-link-list>
`;
