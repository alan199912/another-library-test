import { OnInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Colors } from '@alan199912/library-test/core/models';

@Directive({
  selector: 'div[oAlert]',
  standalone: true
})
export class OAlertDirective implements OnInit {
  @Input() public color: Colors = 'danger';

  constructor(private readonly element: ElementRef, private readonly renderer: Renderer2) {}

  public ngOnInit() {
    this.renderer.setAttribute(this.element.nativeElement, 'class', `alert alert-${this.color}`);
  }
}
