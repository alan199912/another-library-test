import { EventEmitter } from '@angular/core';
import { StepService } from '@alan199912/library-test/core/services';

export abstract class AbstractStep {
  protected stopSteps!: EventEmitter<boolean>;
  public abstract previousStep(): void;
  public abstract nextStep(): void;

  constructor(protected readonly setpsService: StepService) {}
}
