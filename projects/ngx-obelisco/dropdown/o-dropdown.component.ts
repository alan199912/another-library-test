import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dropdown, Sizes } from '@alan199912/library-test/core/models';

@Component({
  selector: 'o-dropdown',
  templateUrl: './o-dropdown.component.html',
  styleUrls: ['./o-dropdown.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ODropdownComponent {
  public selectedOptionsArr: string[] = [];

  @Input() public name!: string;
  @Input() public items: Dropdown[] = [];
  @Input() public size: Sizes = 'md';
  @Input() public isBordered: boolean = false;
  @Input() public isIcon: boolean = false;
  @Input() public isMultipleSelection: boolean = false;

  @Output() public dataSelected = new EventEmitter<string | string[]>();

  get getIsSelectedOption(): boolean {
    return this.selectedOptionsArr.length > 0;
  }

  get getNumberSelectedOptions(): string {
    return this.selectedOptionsArr.length !== 0 ? `(${this.selectedOptionsArr.length})` : '';
  }

  /**
   * @description - Select option
   * Metodo para seleccionar opciones
   * @param  {Dropdown} item
   * @returns void
   */
  public selectedOption(item: Dropdown): void {
    if (this.isIcon) {
      if (this.isMultipleSelection) {
        this.selectedMultipleOption(item);
        return;
      }

      this.selectedOnlyOption(item);
      return;
    }

    this.selectedMultipleOption(item);
  }

  /**
   * @description - Select multiple options
   * Metodo para seleccionar multiples opciones
   * Si la opcion ya esta seleccionada, la deselecciona
   * Si la opcion no esta seleccionada, la selecciona
   * Este metodo se utiliza cuando el dropdown esta en su estado de normal y en su estado de icono con multiples opciones
   * @param  {Dropdown} item
   * @returns void
   */
  private selectedMultipleOption(item: Dropdown): void {
    if (this.selectedOptionsArr.includes(item.key)) {
      this.selectedOptionsArr.splice(this.selectedOptionsArr.indexOf(item.key), 1);
      this.dataSelected.emit(this.selectedOptionsArr);
      return;
    }

    this.selectedOptionsArr.push(item.key);
    this.dataSelected.emit(this.selectedOptionsArr);
  }

  /**
   * @description - Select only one option
   * Metodo para seleccionar solo una opcion
   * Si la opcion ya esta seleccionada, la deselecciona
   * Si la opcion no esta seleccionada, la selecciona
   * Este metodo se utiliza cuando el dropdown esta en su estado de icono con una sola opcion
   * @param  {Dropdown} item
   * @returns void
   */
  private selectedOnlyOption(item: Dropdown): void {
    if (this.selectedOptionsArr.includes(item.key)) {
      this.selectedOptionsArr = [];
      this.dataSelected.emit(this.selectedOptionsArr);
      return;
    }

    this.selectedOptionsArr = [item.key];
    this.dataSelected.emit(this.selectedOptionsArr);
  }
}
