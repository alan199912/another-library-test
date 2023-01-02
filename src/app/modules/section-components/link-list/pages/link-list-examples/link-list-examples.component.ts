import { Component } from '@angular/core';
import {
  LINK_LIST_EXAMPLE_DOWNLOAD_BUTTON_HTML,
  LINK_LIST_EXAMPLE_DOWNLOAD_LINK_HTML,
  LINK_LIST_EXAMPLE_LINK_HTML
} from 'src/app/constants/link-list.constans';

@Component({
  selector: 'app-link-list-examples',
  templateUrl: './link-list-examples.component.html',
  styleUrls: ['./link-list-examples.component.scss']
})
export class LinkListExamplesComponent {
  public exampleDownloadButtonHTML = LINK_LIST_EXAMPLE_DOWNLOAD_BUTTON_HTML;
  public exampleLinkHTML = LINK_LIST_EXAMPLE_LINK_HTML;
  public exampleDownloadLinkHTML = LINK_LIST_EXAMPLE_DOWNLOAD_LINK_HTML;
}
