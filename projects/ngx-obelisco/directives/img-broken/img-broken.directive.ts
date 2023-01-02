import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

const IMG_HEIGHT = '100%';
const DEFAULT_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jomR9foeDrKFgdh_LNV4dCK14fY3DPk-0Q&usqp=CAU';

@Directive({
  selector: 'img[oDefaultImage]',
  standalone: true
})
export class DefaultImageDirective {
  constructor(private readonly imgHost: ElementRef, private readonly renderer: Renderer2) {}

  @HostListener('error') public handleError(): void {
    this.renderer.setAttribute(this.imgHost.nativeElement, 'src', DEFAULT_IMAGE);
    this.renderer.setStyle(this.imgHost.nativeElement, 'height', IMG_HEIGHT);
  }
}
