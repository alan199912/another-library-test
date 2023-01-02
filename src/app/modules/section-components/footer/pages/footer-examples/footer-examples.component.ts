import { Component } from '@angular/core';
import {
  FOOTER_EXAMPLE_ALL_HTML,
  FOOTER_EXAMPLE_ALL_TS,
  FOOTER_EXAMPLE_LINKS_HTML,
  FOOTER_EXAMPLE_LINKS_TS,
  FOOTER_EXAMPLE_NETWORKS_HTML,
  FOOTER_EXAMPLE_NETWORKS_TS,
  FOOTER_EXAMPLE_PHONES_HTML,
  FOOTER_EXAMPLE_PHONES_TS,
  LINKS_LIST,
  NETWORKS_LIST,
  PHONES_LIST
} from 'src/app/constants/footer.constants';

@Component({
  selector: 'app-footer-examples',
  templateUrl: './footer-examples.component.html',
  styleUrls: ['./footer-examples.component.scss']
})
export class FooterExamplesComponent {
  public phonesList = PHONES_LIST;
  public networksList = NETWORKS_LIST;
  public linksList = LINKS_LIST;
  public exampleLinksHTML = FOOTER_EXAMPLE_LINKS_HTML;
  public exampleLinksTS = FOOTER_EXAMPLE_LINKS_TS;
  public exampleNetworksHTML = FOOTER_EXAMPLE_NETWORKS_HTML;
  public exampleNetworksTS = FOOTER_EXAMPLE_NETWORKS_TS;
  public examplePhonesHTML = FOOTER_EXAMPLE_PHONES_HTML;
  public examplePhonesTS = FOOTER_EXAMPLE_PHONES_TS;
  public exampleAllHTML = FOOTER_EXAMPLE_ALL_HTML;
  public exampleAllTS = FOOTER_EXAMPLE_ALL_TS;
}
