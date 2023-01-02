import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  @Input() public title!: string;
  @Input() public isNavCode: boolean = false;

  public isOpenCode: boolean = false;
  public isWindowHTML: boolean = true;

  get linkCode(): string {
    return this.isOpenCode ? 'Esconder codigo' : 'Mostrar codigo';
  }
}
