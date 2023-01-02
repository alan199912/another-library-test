import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bad-practices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bad-practices.component.html',
  styleUrls: ['./bad-practices.component.scss']
})
export class BadPracticesComponent {
  @Input() public practices: string[] = [];
}
