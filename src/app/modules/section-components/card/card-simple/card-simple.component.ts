import { Component } from '@angular/core';
import { CARD_SIMPLE_NAVIGATION } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.scss']
})
export class CardSimpleComponent {
  public navigation = CARD_SIMPLE_NAVIGATION;
}
