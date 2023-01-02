import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAccessComponent } from './o-access/o-access.component';
import { RouterModule } from '@angular/router';
import { OAccessGroupComponent } from './o-access-group/o-access-group.component';
import { OAccessListComponent } from './o-access-list/o-access-list.component';

@NgModule({
  declarations: [OAccessComponent, OAccessGroupComponent, OAccessListComponent],
  imports: [CommonModule, RouterModule],
  exports: [OAccessComponent, OAccessGroupComponent, OAccessListComponent]
})
export class OAccessModule {}
