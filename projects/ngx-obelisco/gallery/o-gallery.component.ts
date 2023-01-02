import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Image } from '@alan199912/library-test/core/models';
import { DefaultImageDirective } from '@alan199912/library-test/directives';

@Component({
  selector: 'o-gallery',
  standalone: true,
  imports: [CommonModule, DefaultImageDirective],
  templateUrl: './o-gallery.component.html',
  styleUrls: ['./o-gallery.component.scss']
})
export class OGalleryComponent {
  @Input() public images: Image[] = [];
  @Input() public isInteractive: boolean = false;
  @Input() public dataTarget!: string;
}
