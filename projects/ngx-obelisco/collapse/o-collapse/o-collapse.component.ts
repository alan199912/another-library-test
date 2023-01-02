import { Component, Input } from '@angular/core';
import { Collapse } from '@alan199912/library-test/core/models';

@Component({
  selector: 'o-collapse',
  templateUrl: './o-collapse.component.html',
  styleUrls: ['./o-collapse.component.scss']
})
export class OCollapseComponent {
  @Input() public expandableContent: Collapse[] = [];
  @Input() public isMultipleSelection: boolean = false;
  @Input() public identifier: string = '';
}
