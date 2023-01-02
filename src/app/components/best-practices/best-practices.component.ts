import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-practices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-practices.component.html',
  styleUrls: ['./best-practices.component.scss']
})
export class BestPracticesComponent {
  @Input() public practices: string[] = [];
}
