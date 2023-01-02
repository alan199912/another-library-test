import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';

export const STATUS_BAR_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/status-bar/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/status-bar/examples'
  }
];

export const STATUS_BAR_DATA_SOURCE_PROPERTIES = [
  {
    name: '@Input() <br/> steps: Steps[]',
    description: 'Se utiliza para definir los pasos que se mostrarán en la barra de estado.'
  },
  {
    name: '@Input() <br/> isExpanded: boolean',
    description: 'Se utiliza para definir si la barra de estado se expandirá o no.'
  }
];

export const STATUS_BAR_DATA_SOURCE_METHODS = [
  {
    name: '@Output() <br/> stopProgress: EventEmitter&lt;boolean&gt;',
    description:
      'Se utiliza para detener el proceso. <br/> Ocurrirá cuando se llegue al último paso y la barra de progreso se complete. <br/> El valor emitido será true.'
  }
];

export const STATUS_BAR_DATA_SOURCE_INTERFACE = [
  {
    name: 'title: string',
    description: 'Se utiliza para definir el título del paso.'
  },
  {
    name: 'description: string',
    description: 'Se utiliza para definir la descripción del paso.'
  },
  {
    name: 'completed?: boolean',
    description: 'Se utiliza para definir si el paso está completado o no. Por defecto es false.'
  },
  {
    name: 'active?: boolean',
    description: 'Se utiliza para definir si el paso está activo o no. Por defecto es false.'
  }
];

export const STATUS_BAR_INTERFACE = `
  export interface Steps {
    title: string;
    description: string;
    completed?: boolean;
    active?: boolean;
  }
`;

export const STATUS_BAR_STEPS = [
  {
    title: 'Estado anterior',
    description: 'Descripcion del estado dd/mm/aa - 00:hs'
  },
  {
    title: 'Estado actual',
    description: 'Descripcion del estado dd/mm/aa - 00:hs'
  },
  {
    title: 'Proximo estado',
    description: 'Descripcion del estado dd/mm/aa - 00:hs'
  },
  {
    title: 'Proximo estado',
    description: 'Descripcion del estado dd/mm/aa - 00:hs'
  },
  {
    title: 'Estado final',
    description: 'Descripcion del estado dd/mm/aa - 00:hs'
  }
];

export const STATUS_BAR_EXAMPLE_DIRECTIVE = `
  <o-status-bar [steps]="steps" (stopSteps)="stopProgress($event)"></o-status-bar>

  <button oStepPrevious class="btn btn-link btn-sm">Anterior</button>
  <button oStepNext class="btn btn-link btn-sm">Siguiente</button>
`;

export const STATUS_BAR_EXMAPLE_DIRECTIVE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {

    public steps: Steps[] = ${codeFormattingArrayList(STATUS_BAR_STEPS)}
    ];

    public stopProgress(event: boolean): void {
      if (event) {
        console.log('Completado');
      }
    }
  }
`;

export const STATUS_BAR_EXAMPLE_FUNCTIONALITY_HTML = `
  <o-status-bar [steps]="steps" [isExpanded]="true" (stopSteps)="stopProgress($event)"></o-status-bar>

  <button class="btn btn-link btn-sm" (click)="previousStep()">Anterior</button>
  <button class="btn btn-link btn-sm" (click)="nextStep()">Siguiente</button>
`;

export const STATUS_BAR_EXMAPLE_FUNCTIONALITY_TS = `
  import { Component, OnInit } from '@angular/core';
  import { StepService } from 'ngx-obelisco';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent implements OnInit {
    public steps: Steps[] = ${codeFormattingArrayList(STATUS_BAR_STEPS)}
    ];

    constructor(private stepService: StepService) {}

    public ngOnInit(): void {
      this.stepService.initialize();
    }

    public nextStep(): void {
      this.stepService.next();
    }

    public previousStep(): void {
      this.stepService.previous();
    }

    public stopProgress(event: boolean): void {
      if (event) {
        console.log('Completado');
      }
    }
  }
`;
