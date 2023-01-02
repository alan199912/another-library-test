import { Component } from '@angular/core';
import { LINK_LIST_NAVIGATION } from 'src/app/constants/link-list.constans';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent {
  public navigation = LINK_LIST_NAVIGATION;
}
