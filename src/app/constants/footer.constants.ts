export const FOOTER_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/footer/overview'
  },
  {
    title: 'Api',
    route: '/components/footer/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/footer/examples'
  }
];

export const FOOTER_DATA_SOURCE = [
  {
    name: '@Input() <br /> phonesList: Phone[]',
    description: 'Se utiliza para mostrar la lista de teléfonos.'
  },
  {
    name: '@Input() <br /> networksList: Network[]',
    description: 'Se utiliza para mostrar la lista de redes sociales.'
  },
  {
    name: '@Input() <br /> linksList: Link[]',
    description: 'Se utiliza para mostrar la lista de enlaces.'
  }
];

export const PHONES_LIST = [
  {
    title: '102 - Niñez y Adolescencia',
    number: 'tel:102'
  },
  {
    title: '103 - Emergencias',
    number: 'tel:103'
  },
  {
    title: '107 - SAME',
    number: 'tel:107'
  },
  {
    title: '911 - Policía',
    number: 'tel:911'
  },
  {
    title: '144 - Violencia de género',
    number: 'tel:144'
  },
  {
    title: '147 - Atención ciudadana',
    number: 'tel:147'
  }
];

export const NETWORKS_LIST = [
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/GCBA',
    icon: 'bxl-facebook'
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/buenosaires',
    icon: 'bxl-instagram'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/gcba',
    icon: 'bxl-twitter'
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/user/GCBA',
    icon: 'bxl-youtube'
  },
  {
    title: 'LinkedIn',
    url: 'https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires',
    icon: 'bxl-linkedin'
  }
];

export const LINKS_LIST = [
  {
    title: 'Boletín oficial',
    url: 'https://boletinoficial.buenosaires.gob.ar'
  },
  {
    title: 'Términos y condiciones',
    url: 'https://www.buenosaires.gob.ar/innovacion/ciudadinteligente/terminos-y-condiciones'
  },
  {
    title: 'Política de privacidad',
    url: 'https://www.buenosaires.gob.ar/privacidad'
  },
  {
    title: 'Oficios judiciales',
    url: 'https://www.buenosaires.gob.ar/oficiosjudiciales'
  }
];

export const FOOTER_INTERFACE_PHONE = `
  interface Phone {
    title: string;
    number: string;
  }
`;

export const FOOTER_INTERFACE_NETWORK = `
interface Network {
  title: string;
  url: string;
  icon: string;
}`;

export const FOOTER_INTERFACE_LINK = `
interface Link {
  title: string;
  url: string;
}`;

export const FOOTER_INTERFACE_PHONE_DATA_SOURCE = [
  {
    name: 'title: string',
    description: 'Se utiliza para definir el nombre.'
  },
  {
    name: 'number: string',
    description: 'Se utiliza para definir el número del telefono.'
  }
];

export const FOOTER_INTERFACE_NETWORK_DATA_SOURCE = [
  {
    name: 'title: string',
    description: 'Se utiliza para definir el nombre de la red social.'
  },
  {
    name: 'url: string',
    description: 'Se utiliza para definir la url de la red social.'
  },
  {
    name: 'icon: string',
    description: 'Se utiliza para definir el icono de la red social.'
  }
];

export const FOOTER_INTERFACE_LINKS_DATA_SOURCE = [
  {
    name: 'title: string',
    description: 'Se utiliza para definir el nombre del enlace.'
  },
  {
    name: 'url: string',
    description: 'Se utiliza para definir la url del enlace.'
  }
];

export const FOOTER_EXAMPLE_LINKS_HTML = `
  <o-footer [linksList]="linksList"></o-footer>
`;
export const FOOTER_EXAMPLE_NETWORKS_HTML = `
  <o-footer [networksList]="networksList"></o-footer>
`;
export const FOOTER_EXAMPLE_PHONES_HTML = `
  <o-footer [phonesList]="phonesList"></o-footer>
`;

export const FOOTER_EXAMPLE_ALL_HTML = `
  <o-footer
    [linksList]="linksList"
    [networksList]="networksList"
    [phonesList]="phonesList"
  ></o-footer>
`;

export const FOOTER_EXAMPLE_LINKS_TS = `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-footer-examples',
    templateUrl: './footer-examples.component.html',
  })
  export class FooterExamplesComponent {
    public linksList = [
      {
        title: 'Boletín oficial',
        url: 'https://boletinoficial.buenosaires.gob.ar'
      },
      {
        title: 'Términos y condiciones',
        url: 'https://www.buenosaires.gob.ar/innovacion/ciudadinteligente/terminos-y-condiciones'
      },
      {
        title: 'Política de privacidad',
        url: 'https://www.buenosaires.gob.ar/privacidad'
      },
      {
        title: 'Oficios judiciales',
        url: 'https://www.buenosaires.gob.ar/oficiosjudiciales'
      }
    ];
  }
`;

export const FOOTER_EXAMPLE_NETWORKS_TS = `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-footer-examples',
    templateUrl: './footer-examples.component.html',
  })
  export class FooterExamplesComponent {
    public networksList  = [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/GCBA',
        icon: 'bxl-facebook'
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/buenosaires',
        icon: 'bxl-instagram'
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/gcba',
        icon: 'bxl-twitter'
      },
      {
        title: 'Youtube',
        url: 'https://www.youtube.com/user/GCBA',
        icon: 'bxl-youtube'
      },
      {
        title: 'LinkedIn',
        url: 'https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires',
        icon: 'bxl-linkedin'
      }
    ];
  }
`;

export const FOOTER_EXAMPLE_PHONES_TS = `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-footer-examples',
    templateUrl: './footer-examples.component.html',
  })
  export class FooterExamplesComponent {
    public phonesList = [
      {
        title: '102 - Niñez y Adolescencia',
        number: 'tel:102'
      },
      {
        title: '103 - Emergencias',
        number: 'tel:103'
      },
      {
        title: '107 - SAME',
        number: 'tel:107'
      },
      {
        title: '911 - Policía',
        number: 'tel:911'
      },
        title: '144 - Violencia de género',
        number: 'tel:144'
      },
      {
        title: '147 - Atención ciudadana',
        number: 'tel:147'
      }
    ];
  }
`;

export const FOOTER_EXAMPLE_ALL_TS = `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-footer-examples',
    templateUrl: './footer-examples.component.html',
  })
  export class FooterExamplesComponent {
    public linksList = [
      {
        title: 'Boletín oficial',
        url: 'https://boletinoficial.buenosaires.gob.ar'
      },
      {
        title: 'Términos y condiciones',
        url: 'https://www.buenosaires.gob.ar/innovacion/ciudadinteligente/terminos-y-condiciones'
      },
      {
        title: 'Política de privacidad',
        url: 'https://www.buenosaires.gob.ar/privacidad'
      },
      {
        title: 'Oficios judiciales',
        url: 'https://www.buenosaires.gob.ar/oficiosjudiciales'
      }
    ];

    public networksList  = [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/GCBA',
        icon: 'bxl-facebook'
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/buenosaires',
        icon: 'bxl-instagram'
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/gcba',
        icon: 'bxl-twitter'
      },
      {
        title: 'Youtube',
        url: 'https://www.youtube.com/user/GCBA',
        icon: 'bxl-youtube'
      },
      {
        title: 'LinkedIn',
        url: 'https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires',
        icon: 'bxl-linkedin'
      }
    ];

    public phonesList = [
      {
        title: '102 - Niñez y Adolescencia',
        number: 'tel:102'
      },
      {
        title: '103 - Emergencias',
        number: 'tel:103'
      },
      {
        title: '107 - SAME',
        number: 'tel:107'
      },
      {
        title: '911 - Policía',
        number: 'tel:911'
      },
        title: '144 - Violencia de género',
        number: 'tel:144'
      },
      {
        title: '147 - Atención ciudadana',
        number: 'tel:147'
      }
    ];
  }
`;
