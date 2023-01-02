import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'o-card-container-horizontal',
  templateUrl: './o-card-container-horizontal.component.html',
  styleUrls: ['./o-card-container-horizontal.component.scss']
})
export class OCardContainerHorizontalComponent implements AfterViewInit {
  @Input() public title!: string;
  @Input() public text!: string;
  @Input() public img!: string;
  @Input() public link!: string;
  @Input() public route!: string;
  @Input() public isBig: boolean = false;
  @Input() public isUnbordered: boolean = false;

  @ViewChild('card') public card!: ElementRef;

  constructor(private readonly renderer: Renderer2) {}

  get isOnlyWithIcon(): boolean {
    return this.isUnbordered && !this.img;
  }

  get isOnlyWithImage(): boolean {
    return this.isBig && !!this.img;
  }

  public ngAfterViewInit(): void {
    if (this.link) {
      this.renderer.setAttribute(this.card.nativeElement, 'href', this.link);
    }
  }
}
