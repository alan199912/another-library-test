import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';

const formattedExampleTsCode = (code: any) => `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public imagesList = ${codeFormattingArrayList(code)}
    ];
  }`;

export const GALLERY_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/gallery/overview'
  },
  {
    title: 'Api',
    route: '/components/gallery/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/gallery/examples'
  }
];

export const GALLERY_DATA_SOURCE = [
  {
    name: '@Input() <br /> images: Image[]',
    description: 'Se utiliza para pasar una lista de imágenes que se mostrarán en la galería.'
  },
  {
    name: '@Input() <br /> isInteractive: boolean ',
    description: 'Se utiliza para habilitar o deshabilitar la interacción con la galería.'
  },
  {
    name: '@Input() <br /> dataTarget: string',
    description: 'Se utiliza para pasar el id del elemento que se mostrará en la galería.'
  }
];

export const IMAGES_LIST_1 = [
  {
    author: 'Autor 1',
    title: 'Titulo de la imagen 1',
    description: 'Descripcion de la imagen 1',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/1.jpg?raw=true'
  }
];

export const IMAGES_LIST_2 = [
  ...IMAGES_LIST_1,
  {
    author: 'Autor 2',
    title: 'Titulo de la imagen 2',
    description: 'Descripcion de la imagen 2',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/2.jpg?raw=true'
  }
];

export const IMAGES_LIST_3 = [
  ...IMAGES_LIST_2,
  {
    author: 'Autor 3',
    title: 'Titulo de la imagen 3',
    description: 'Descripcion de la imagen 3',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/3.jpg?raw=true'
  }
];

export const IMAGES_LIST_4 = [
  ...IMAGES_LIST_3,
  {
    author: 'Autor 4',
    title: 'Titulo de la imagen 4',
    description: 'Descripcion de la imagen 4',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/4.jpg?raw=true'
  }
];

export const IMAGES_LIST_5 = [
  ...IMAGES_LIST_4,
  {
    author: 'Autor 5',
    title: 'Titulo de la imagen 5',
    description: 'Descripcion de la imagen 5',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/5.jpg?raw=true'
  }
];

export const IMAGES_LIST_6 = [
  ...IMAGES_LIST_5,
  {
    author: 'Autor 6',
    title: 'Titulo de la imagen 6',
    description: 'Descripcion de la imagen 6',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/1.jpg?raw=true'
  }
];

export const IMAGES_LIST_7 = [
  ...IMAGES_LIST_6,
  {
    author: 'Autor 7',
    title: 'Titulo de la imagen 7',
    description: 'Descripcion de la imagen 7',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/2.jpg?raw=true'
  }
];

export const GALLERY_INTERFACE_IMAGE_ITEM = `
  interface Image {
    author: string;
    title: string;
    description: string;
    src: string;
  }`;

export const GALLERY_INTERFACE_DATA_SOURCE = [
  {
    name: 'author: string',
    description: 'Se utiliza para definir el autor de la imagen.'
  },
  {
    name: 'title: string',
    description: 'Se utiliza para definir el título de la imagen.'
  },
  {
    name: 'description: string',
    description: 'Se utiliza para definir la descripción de la imagen.'
  },
  {
    name: 'src: string',
    description: 'Se utiliza para definir la url de la imagen.'
  }
];

export const GALLERY_EXAMPLE_INTERACTIVE_HTML = `
  <o-gallery [images]="imagesList" [isInteractive]="true" dataTarget="modalGallery"></o-gallery>
`;

export const GALLERY_EXAMPLE_INTERACTIVE_TS = formattedExampleTsCode(IMAGES_LIST_3);

export const GALLERY_EXAMPLE_IMAGES_LIST_HTML = `<o-gallery [images]="imagesList"></o-gallery>`;

export const GALLERY_EXAMPLE_IMAGES_LIST_1_TS = formattedExampleTsCode(IMAGES_LIST_1);

export const GALLERY_EXAMPLE_IMAGES_LIST_2_TS = formattedExampleTsCode(IMAGES_LIST_2);

export const GALLERY_EXAMPLE_IMAGES_LIST_3_TS = formattedExampleTsCode(IMAGES_LIST_3);

export const GALLERY_EXAMPLE_IMAGES_LIST_4_TS = formattedExampleTsCode(IMAGES_LIST_4);

export const GALLERY_EXAMPLE_IMAGES_LIST_5_TS = formattedExampleTsCode(IMAGES_LIST_5);

export const GALLERY_EXAMPLE_IMAGES_LIST_6_TS = formattedExampleTsCode(IMAGES_LIST_6);

export const GALLERY_EXAMPLE_IMAGES_LIST_7_TS = formattedExampleTsCode(IMAGES_LIST_7);

//TODO: Tipo any a ImageItem[]
