import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'o-card-simple-horizontal',
  templateUrl: './o-card-simple-horizontal.component.html',
  styleUrls: ['./o-card-simple-horizontal.component.scss']
})
export class OCardSimpleHorizontalComponent implements AfterViewInit {
  @Input() public img!: string;
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
