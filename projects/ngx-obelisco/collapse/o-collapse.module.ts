import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OCollapseComponent } from './o-collapse/o-collapse.component';
import { OCollapseInfoComponent } from './o-collapse-info/o-collapse-info.component';

@NgModule({
  declarations: [OCollapseComponent, OCollapseInfoComponent],
  imports: [CommonModule],
  exports: [OCollapseComponent, OCollapseInfoComponent]
})
export class OCollapseModule {}
