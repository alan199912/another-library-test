import { Component, OnInit } from '@angular/core';
import { STATUS_BAR_STEPS } from 'src/app/constants/status-bar.constants';

@Component({
  selector: 'app-status-bar-demo',
  templateUrl: './status-bar-demo.component.html',
  styleUrls: ['./status-bar-demo.component.scss']
})
export class StatusBarDemoComponent implements OnInit {
  public steps: any = STATUS_BAR_STEPS;
  public isExpanded = true;
  public isDisabledPrevious = false;

  public ngOnInit() {
    this.isDisabledPrevious = true;
    this.steps = this.steps.map((step: any, index: number) => {
      step.active = false;
      step.completed = false;

      if (index === 0) {
        step.active = true;
        step.completed = true;
      }

      return step;
    });
  }

  public previousStep() {
    const indexActive = this.steps.findIndex((step: any) => step.active);

    this.steps = this.steps.map((step: any, index: any) => {
      if (index === indexActive) {
        step.completed = false;
        step.active = false;
      } else if (index === indexActive - 1) {
        step.active = true;
      }

      return step;
    });

    if (indexActive === 1) {
      this.isDisabledPrevious = true;
      return;
    }
  }

  public nextStep() {
    this.isDisabledPrevious = false;
    const indexActive = this.steps.findIndex((step: any) => step.active);
    const lastStep = this.steps.length - 1;

    if (indexActive === lastStep) {
      return;
    }

    this.steps = this.steps.map((step: any, index: any) => {
      if (index === indexActive) {
        step.completed = true;
        step.active = false;
      } else if (index === indexActive + 1) {
        step.active = true;
      }

      return step;
    });
  }
}
