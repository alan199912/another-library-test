import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'o-card-event-simple',
  templateUrl: './o-card-event-simple.component.html',
  styleUrls: ['./o-card-event-simple.component.scss']
})
export class OCardEventSimpleComponent implements AfterViewInit {
  @Input() public title!: string;
  @Input() public text!: string;
  @Input() public img!: string;
  @Input() public date!: Date;
  @Input() public route!: string;
  @Input() public link!: string;
  @Input() public hours: number[] = [];

  @ViewChild('card') public card!: ElementRef;

  constructor(private readonly renderer: Renderer2) {}

  get getIsHours(): boolean {
    return this.hours.length > 0;
  }

  public ngAfterViewInit(): void {
    if (this.link) {
      this.renderer.setAttribute(this.card.nativeElement, 'href', this.link);
    }
  }
}
