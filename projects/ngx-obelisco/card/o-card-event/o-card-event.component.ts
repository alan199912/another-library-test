import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'o-card-event',
  templateUrl: './o-card-event.component.html',
  styleUrls: ['./o-card-event.component.scss']
})
export class OCardEventComponent implements AfterViewInit {
  @Input() public title!: string;
  @Input() public eventName!: string;
  @Input() public initialDate!: Date;
  @Input() public finalDate!: Date;
  @Input() public img!: string;
  @Input() public imgEvent!: string;
  @Input() public link!: string;
  @Input() public route!: string;

  @ViewChild('card') card!: ElementRef;

  constructor(private readonly renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    if (this.link) {
      this.renderer.setAttribute(this.card.nativeElement, 'href', this.link);
    }
  }
}
