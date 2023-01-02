import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'o-card-simple',
  templateUrl: './o-card-simple.component.html',
  styleUrls: ['./o-card-simple.component.scss']
})
export class OCardSimpleComponent implements AfterViewInit {
  @Input() public title!: string;
  @Input() public text!: string;
  @Input() public link!: string;
  @Input() public route!: string;

  @ViewChild('cardLink') cardLink!: ElementRef;

  constructor(private readonly renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    if (this.link) {
      this.renderer.setAttribute(this.cardLink.nativeElement, 'href', this.link);
    }
  }
}
