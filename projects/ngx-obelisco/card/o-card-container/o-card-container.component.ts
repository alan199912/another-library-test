import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'o-card-container',
  templateUrl: './o-card-container.component.html',
  styleUrls: ['./o-card-container.component.scss']
})
export class OCardContainerComponent implements AfterViewInit {
  @Input() public title!: string;
  @Input() public text!: string;
  @Input() public link!: string;
  @Input() public route!: string;
  @Input() public srcAudio!: string;

  @ViewChild('card') private card!: ElementRef;

  constructor(private readonly renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.link) {
      this.renderer.setAttribute(this.card.nativeElement, 'href', this.link);
    }
  }
}
