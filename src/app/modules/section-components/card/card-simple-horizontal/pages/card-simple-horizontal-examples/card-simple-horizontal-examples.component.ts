import { Component } from '@angular/core';
import { CARD_SIMPLE_HORIZONTAL_EXAMPLE } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-simple-horizontal-examples',
  templateUrl: './card-simple-horizontal-examples.component.html',
  styleUrls: ['./card-simple-horizontal-examples.component.scss']
})
export class CardSimpleHorizontalExamplesComponent {
  public cardExample = CARD_SIMPLE_HORIZONTAL_EXAMPLE;
}
