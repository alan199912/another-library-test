import { Component } from '@angular/core';
import { ACCESS_GROUP } from 'src/app/constants/access.constants';

@Component({
  selector: 'app-access-group',
  templateUrl: './access-group.component.html',
  styleUrls: ['./access-group.component.scss']
})
export class AccessGroupComponent {
  public accessGroupNavigation = ACCESS_GROUP;
}
