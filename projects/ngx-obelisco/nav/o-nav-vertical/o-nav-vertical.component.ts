import { Component, Input } from '@angular/core';
import { NavVerticalItems } from '@alan199912/library-test/core/models';

@Component({
  selector: 'o-nav-vertical',
  templateUrl: './o-nav-vertical.component.html',
  styleUrls: ['./o-nav-vertical.component.scss']
})
export class ONavVerticalComponent {
  @Input() public navItems: NavVerticalItems[] = [];

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
