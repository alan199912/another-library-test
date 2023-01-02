import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '@alan199912/library-test/core/models';
import { Sizes } from '@alan199912/library-test/core/models';

@Component({
  selector: 'o-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './o-option.component.html',
  styleUrls: ['./o-option.component.scss']
})
export class OOptionComponent implements OnInit {
  @Input() public name!: string;
  @Input() public options: Option[] = [];
  @Input() public size: Sizes = 'md';

  @Output() optionSelected = new EventEmitter<string>();

  private firstActive!: Option;

  public ngOnInit(): void {
    this.firstActive = this.options.find((e) => e.active === true)!;
    this.options.map((e) => e !== this.firstActive && (e.active = false));
  }

  public selectedOption(item: Option): void {
    if (item !== this.firstActive) {
      this.firstActive = item;
      this.optionSelected.emit(item.key);
    }

    this.options.map((e) => e !== item && (e.active = false));
    item.active = !item.active;
  }
}
