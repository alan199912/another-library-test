import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AbstractStep } from '@alan199912/library-test/core/abstracts';
import { Steps } from '@alan199912/library-test/core/models';
import { StepService } from '@alan199912/library-test/core/services';

@Component({
  selector: 'o-status-bar',
  templateUrl: './o-status-bar.component.html',
  styleUrls: ['./o-status-bar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class OStatusBarComponent extends AbstractStep implements OnInit, OnDestroy {
  @Input() public steps: Steps[] = [];
  @Input() public isExpanded = false;

  @Output() public override stopSteps = new EventEmitter<boolean>(false);

  private readonly onDestroy$ = new Subject<void>();

  constructor(private readonly statusBarService: StepService) {
    super(statusBarService);
  }

  public ngOnInit(): void {
    this.statusBarService.getNext.pipe(takeUntil(this.onDestroy$)).subscribe(() => {
      this.nextStep();
    });

    this.statusBarService.getPrevious.pipe(takeUntil(this.onDestroy$)).subscribe(() => {
      this.previousStep();
    });

    this.steps = this.steps.map((step, index) => {
      step.active = false;
      step.completed = false;

      if (index === 0) {
        step.active = true;
        step.completed = true;
      }

      return step;
    });
  }

  public previousStep(): void {
    this.setpsService.isFirstStep.emit(false);
    const indexActive = this.steps.findIndex((step) => step.active);

    if (indexActive === 0) {
      this.setpsService.isFirstStep.emit(true);
      return;
    }

    this.steps = this.steps.map((step, index) => {
      if (index === indexActive) {
        step.completed = false;
        step.active = false;
      } else if (index === indexActive - 1) {
        step.active = true;
      }

      return step;
    });
  }

  public nextStep(): void {
    this.setpsService.isFirstStep.emit(false);
    const indexActive = this.steps.findIndex((step) => step.active);
    const lastStep = this.steps.length - 1;

    if (indexActive === lastStep) {
      this.stopSteps.emit(true);
      this.setpsService.stopEmmiter.emit(true);
      return;
    }

    this.steps = this.steps.map((step, index) => {
      if (index === indexActive) {
        step.completed = true;
        step.active = false;
      } else if (index === indexActive + 1) {
        step.active = true;
      }

      return step;
    });
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
