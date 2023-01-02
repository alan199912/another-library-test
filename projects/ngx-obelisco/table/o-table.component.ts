import { CommonModule } from '@angular/common';
import {
  OnInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
  Renderer2
} from '@angular/core';
import { Column } from '@alan199912/library-test/core/models';

@Component({
  selector: 'o-table',
  templateUrl: './o-table.component.html',
  styleUrls: ['./o-table.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class OTableComponent implements OnInit, AfterViewInit {
  public isValidateComponent: boolean = false;

  @Input() public displayedColumns: Column[] = [];
  @Input() public dataSource: any[] = [];
  @Input() public isBordered: boolean = false;
  @Input() public isStriped: boolean = false;
  @Input() public isHover: boolean = false;
  @Input() public isSelectable: boolean = false;
  @Output() public dataSelected = new EventEmitter<any>();

  private inputCheckArr: ElementRef[] = [];
  private DataSelectedArr: any[] = [];

  @ViewChildren('checkbox') public checkbox!: QueryList<ElementRef>;

  constructor(private readonly renderer: Renderer2) {}

  public ngOnInit(): void {
    this.componentValidations();
  }

  public ngAfterViewInit(): void {
    this.checkbox.map((e) => {
      this.inputCheckArr.push(e.nativeElement);
    });
  }

  /**
   * @description
   * This method is used to validate the component
   * For this component to work, the following conditions must be met:
   * 1. The displayedColumns and displayedColumns property must be filled
   * 2. The displayedColumns property must be has "values" and "keys" not null
   * 3. The displayedColumns is trimmed for spaces
   * 4. The displayedColumns is converted to capitalization
   * 5. The displayedColumns is validated if "value" contains numbers or special characters and "key" contains numbers, special characters or accents
   * @returns void
   */
  private componentValidations(): void {
    this.isValidateComponent = this.displayedColumns.length > 0 && this.dataSource.length > 0;

    if (!this.isValidateComponent) {
      throw new Error('The displayedColumns and dataSource must not be empty');
    }

    this.displayedColumns.map((e) => {
      if (e.key === '' || e.value === '') {
        this.isValidateComponent = false;
        throw new Error('The displayedColumns must not have null values');
      }
    });

    this.displayedColumns.map((e) => (e.value = e.value.trim()));

    this.displayedColumns = this.displayedColumns.map((e) => {
      e.value = e.value.charAt(0).toUpperCase() + e.value.slice(1).toLowerCase();
      return e;
    });

    this.displayedColumns.map((e) => {
      if (e.value.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/) && e.key.match(/^[a-zA-Z ]*$/)) {
        this.isValidateComponent = true;
        return e;
      } else {
        this.isValidateComponent = false;
        throw new Error(
          'The displayedColumns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
        );
      }
    });
  }

  public allSelected($event: any): void {
    if (!$event.checked) {
      this.checkbox.map((e) => this.renderer.setProperty(e.nativeElement, 'checked', false));
      this.DataSelectedArr = [];
    } else {
      this.checkbox.map((e) => this.renderer.setProperty(e.nativeElement, 'checked', true));
      this.DataSelectedArr = this.dataSource;
    }

    this.dataSelected.emit(this.DataSelectedArr);
  }

  public selectedRow($event: any): void {
    const index = this.inputCheckArr.indexOf($event);
    if ($event.checked) {
      this.DataSelectedArr.push(this.dataSource[index]);
    } else {
      this.DataSelectedArr = this.DataSelectedArr.filter((_, i) => i !== index);
    }
    this.dataSelected.emit(this.DataSelectedArr);
  }
}
