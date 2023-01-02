import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ONavHorizontalComponent } from './o-nav-horizontal/o-nav-horizontal.component';
import { ONavVerticalComponent } from './o-nav-vertical/o-nav-vertical.component';

@NgModule({
  declarations: [ONavHorizontalComponent, ONavVerticalComponent],
  imports: [CommonModule, RouterModule],
  exports: [ONavHorizontalComponent, ONavVerticalComponent]
})
export class ONavModule {}
