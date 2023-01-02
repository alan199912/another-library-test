import { Component, Input } from '@angular/core';
import { CollapseInfo } from '@alan199912/library-test/core/models';

@Component({
  selector: 'o-collapse-info',
  templateUrl: './o-collapse-info.component.html',
  styleUrls: ['./o-collapse-info.component.scss']
})
export class OCollapseInfoComponent {
  @Input() public title!: string;
  @Input() public subtitle!: string;
  @Input() public identifier!: string;
  @Input() public expandableContent: CollapseInfo[] = [];

  get getLastExpandableContent(): number {
    return this.expandableContent.indexOf(this.expandableContent[this.expandableContent.length - 1]);
  }
}
