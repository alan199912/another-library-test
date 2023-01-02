import { Component } from '@angular/core';
import {
  CARD_CONTAINER_EXAMPLE_ICON,
  CARD_CONTAINER_EXAMPLE_NO_ICON,
  CARD_CONTAINER_EXAMPLE_TITLE,
  CARD_CONTAINER_EXAMPLE_AUDIO
} from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-container-examples',
  templateUrl: './card-container-examples.component.html',
  styleUrls: ['./card-container-examples.component.scss']
})
export class CardContainerExamplesComponent {
  public cardIcon = CARD_CONTAINER_EXAMPLE_ICON;
  public cardNoIcon = CARD_CONTAINER_EXAMPLE_NO_ICON;
  public cardJustTitle = CARD_CONTAINER_EXAMPLE_TITLE;
  public cardAudio = CARD_CONTAINER_EXAMPLE_AUDIO;
}
