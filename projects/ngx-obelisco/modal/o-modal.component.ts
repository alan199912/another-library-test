import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'o-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './o-modal.component.html',
  styleUrls: ['./o-modal.component.scss']
})
export class OModalComponent {
  @Input() public dataTarget!: string;
  @Input() public title!: string;
  @Input() public description!: string;
}
