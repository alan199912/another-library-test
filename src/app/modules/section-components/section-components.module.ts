import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponentsRoutingModule } from './section-components-routing.module';
import { OCardModule } from '@alan199912/library-test/card';
import { ONavModule } from '@alan199912/library-test/nav';

import { SectionComponentsComponent } from './section-components.component';

@NgModule({
  declarations: [SectionComponentsComponent],
  imports: [CommonModule, SectionComponentsRoutingModule, ONavModule, OCardModule]
})
export class SectionComponentsModule {}
