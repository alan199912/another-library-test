import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import { LINK_LIST_DATA_SOURCE } from 'src/app/constants/link-list.constans';

@Component({
  selector: 'app-link-list-api',
  templateUrl: './link-list-api.component.html',
  styleUrls: ['./link-list-api.component.scss']
})
export class LinkListApiComponent {
  public dataSource = LINK_LIST_DATA_SOURCE;
  public columns = COLUMNS;
}
