import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-large-featured-panel',
  templateUrl: './o-large-featured-panel.component.html',
  styleUrls: ['./o-large-featured-panel.component.scss']
})
export class OLargeFeaturedPanelComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public url!: string;
  @Input() public isVideo: boolean = false;
  @Input() public isVertical: boolean = false;
}
