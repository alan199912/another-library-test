import { Component } from '@angular/core';
import { CARD_CONTAINER_NAVIGATION } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
  public navigation = CARD_CONTAINER_NAVIGATION;
}
