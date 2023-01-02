import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-small-featured-panel',
  templateUrl: './o-small-featured-panel.component.html',
  styleUrls: ['./o-small-featured-panel.component.scss']
})
export class OSmallFeaturedPanelComponent {
  @Input() public image!: string;
  @Input() public title!: string;
  @Input() public description!: string;
}
