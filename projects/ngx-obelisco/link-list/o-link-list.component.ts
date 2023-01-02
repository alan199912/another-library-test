import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-link-list',
  templateUrl: './o-link-list.component.html',
  styleUrls: ['./o-link-list.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class OLinkListComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public image!: string;
}
