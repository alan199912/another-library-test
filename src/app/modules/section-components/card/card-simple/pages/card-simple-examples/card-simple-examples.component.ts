import { Component } from '@angular/core';
import {
  CARD_SIMPLE_EXAMPLE_ICON,
  CARD_SIMPLE_EXAMPLE_NO_ICON,
  CARD_SIMPLE_EXAMPLE_TITLE
} from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-simple-examples',
  templateUrl: './card-simple-examples.component.html',
  styleUrls: ['./card-simple-examples.component.scss']
})
export class CardSimpleExamplesComponent {
  public cardIcon = CARD_SIMPLE_EXAMPLE_ICON;
  public cardNoIcon = CARD_SIMPLE_EXAMPLE_NO_ICON;
  public cardJustTitle = CARD_SIMPLE_EXAMPLE_TITLE;
}
