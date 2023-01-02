export const STEPS_FORM_NAVIGATION = [
  {
    title: 'Resumen',
    route: '/components/steps-form/overview'
  },
  {
    title: 'Api',
    route: '/components/steps-form/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/steps-form/examples'
  }
];

export const STEPS_FORM_BEST_PRACTICES = [
  '<strong>Respetar la progresión lineal.</strong> El indicador de paso está diseñado para complementar la navegación estándar Atrás/Siguiente en una secuencia lineal. Debe utilizarse cuando se pueda detectar la tasa de finalización del proceso.',
  '<strong>Proporcionar la navegación por separado.</strong> En un formulario utilizar botones para avanzar y retroceder.',
  '<strong>Usar etiquetas cortas o de una sola palabra.</strong> Utilice palabras/frases cortas y descriptivas.',
  '<strong>Utilizar este componente a partir de 3 y hasta 5 pasos.</strong> De necesitar más pasos pensar en redefinir los formularios en menos pasos.',
  '<strong>Utilizar un indicador de pasos para formularios muy breves, sin capítulos o secciones.</strong> Debe tener al menos tres secciones.'
];

export const STEPS_FORM_BAD_PRACTICES = [
  '<strong>No utilizar el paso a paso en procesos de más de 6 pasos.</strong> Considerar simplificar el proceso o dividirlo en varias tareas.',
  '<strong>Evitar la cantidad de pasos variables.</strong> Considerar otro enfoque si la cantidad de pasos puede cambiar debido a la entrada del usuario.'
];

export const DATA_SOURCE_STEPS_FORM_INPUT = [
  {
    name: '@Input() <br/> steps: string[]',
    description: 'Se utiliza para definir los pasos que se mostrarán en la barra de estado.'
  }
];

export const DATA_SOURCE_STEPS_FORM_OUTPUT = [
  {
    name: '@Output <br /> stopSteps: EventEmitter&lt;boolean&gt;',
    description:
      'Se utiliza para detener el proceso. <br/> Ocurrirá cuando se llegue al último paso y la barra de progreso se complete. <br/> El valor emitido será true.'
  }
];

export const STEPS_FORM_EXAMPLE_DIRECTIVE_HTML = `
  <o-steps-form [steps]="steps" (stopSteps)="stopProgress($event)"></o-steps-form>
  <br />
  <button oStepPrevious class="btn btn-sm btn-link mr-2">Anterior</button>
  <button oStepNext class="btn btn-sm btn-link">Siguiente</button>
`;

export const STEPS_FORM_EXAMPLE_DIRECTIVE_TS = `
  import { Component, OnInit } from '@angular/core';
  import { StepService } from 'ngx-obelisco';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent implements OnInit {
    public steps = ['Paso 1', 'Paso 2', 'Paso 3'];

    public stopProgress(event: boolean): void {
      if (event) {
        console.log('Completado');
      }
    }
  }
`;

export const STEPS_FORM_EXAMPLE_FUNCTIONALITY_HTML = `
  <o-steps-form [steps]="steps" (stopSteps)="stopProgress($event)"></o-steps-form>
  <br />
  <button class="btn btn-sm btn-link mr-2" (click)="previousStep()">Anterior</button>
  <button class="btn btn-sm btn-link" (click)="nextStep()">Siguiente</button>
`;

export const STEPS_FORM_EXAMPLE_FUNCTIONALITY_TS = `
  import { Component, OnInit } from '@angular/core';
  import { StepService } from 'ngx-obelisco';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent implements OnInit {
    public steps = ['Paso 1', 'Paso 2', 'Paso 3'];

    constructor(private readonly stepsFormService: StepService) {}

    public ngOnInit(): void {
      this.stepsFormService.initialize();
    }

    public nextStep(): void {
      this.stepsFormService.next();
    }

    public previousStep(): void {
      this.stepsFormService.previous();
    }

    public stopProgress(event: boolean): void {
      if (event) {
        console.log('Completado');
      }
    }
  }
`;
