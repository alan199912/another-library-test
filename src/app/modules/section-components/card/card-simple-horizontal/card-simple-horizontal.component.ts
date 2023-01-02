import { Component } from '@angular/core';
import { CARD_SIMPLE_HORIZONTAL_NAVIGATION } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-simple-horizontal',
  templateUrl: './card-simple-horizontal.component.html',
  styleUrls: ['./card-simple-horizontal.component.scss']
})
export class CardSimpleHorizontalComponent {
  public navigation = CARD_SIMPLE_HORIZONTAL_NAVIGATION;
}
