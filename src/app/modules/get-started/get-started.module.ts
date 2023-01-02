import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

import { GetStartedComponent } from './get-started.component';

@NgModule({
  declarations: [GetStartedComponent],
  imports: [CommonModule, PrismDirective]
})
export class GetStartedModule {}
