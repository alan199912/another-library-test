import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public exampleComment = `// Instalación con npm`;
  public exampleInstall = `npm install @alan199912/library-test`;
}
