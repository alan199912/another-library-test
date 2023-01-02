import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'o-card-notice',
  templateUrl: './o-card-notice.component.html',
  styleUrls: ['./o-card-notice.component.scss']
})
export class OCardNoticeComponent implements AfterViewInit {
  @Input() public title!: string;
  @Input() public img!: string;
  @Input() public tags: string[] = [];
  @Input() public text!: string;
  @Input() public link!: string;
  @Input() public route!: string;
  @Input() public datePublication!: Date;
  @Input() public srcAudio!: string;

  @ViewChild('card') public card!: ElementRef;

  constructor(private readonly renderer: Renderer2) {}

  get getIsTags(): boolean {
    return this.tags.length > 0;
  }

  public ngAfterViewInit(): void {
    if (this.link) {
      this.renderer.setAttribute(this.card.nativeElement, 'href', this.link);
    }
  }
}
