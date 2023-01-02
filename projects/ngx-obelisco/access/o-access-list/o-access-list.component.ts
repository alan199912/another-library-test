import { Component, Input } from '@angular/core';
import { Access, AccessCategory } from '@alan199912/library-test/core/models';

@Component({
  selector: 'o-access-list',
  templateUrl: './o-access-list.component.html',
  styleUrls: ['./o-access-list.component.scss']
})
export class OAccessListComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public access!: Access;
  @Input() public accessElements: Access[] = [];
  @Input() public accessCategoryElements: AccessCategory[] = [];

  get getIsAccessElements(): boolean {
    return this.accessElements.length > 0;
  }
}
