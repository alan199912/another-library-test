import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'o-pagination',
  templateUrl: './o-pagination.component.html',
  styleUrls: ['./o-pagination.component.scss']
})
export class OPaginationComponent implements OnInit {
  @Input() public totalPages!: number;
  @Input() public ariaLabel!: string;
  @Input() public actualPage: number = 1;
  @Output() public currentPage: EventEmitter<number> = new EventEmitter<number>();

  public pagesArr: number[] = [];
  public isShowTopTrimmer = false;
  public isShowBottomTrimmer = false;
  public pagesToShow: number[] = [];
  public lastIndex!: number;
  public isBlockEvent = false;

  get getIsFirstPage(): boolean {
    return this.actualPage === 0;
  }

  get getIsLastPage(): boolean {
    return this.actualPage === this.pagesArr.length - 1;
  }

  ngOnInit(): void {
    this.pagesArr = Array.from(Array(this.totalPages).keys());
    this.pagesToShow = this.pagesArr;
    this.lastIndex = this.pagesArr.length - 1;
    this.isShowTopTrimmer = true;
    this.selectedPage(this.actualPage - 1);
  }

  public selectedPage(page: number): void {
    if (this.actualPage === page) return;
    this.actualPage = page;

    if (!this.isBlockEvent) {
      this.currentPage.emit(page + 1);
    }

    if (this.pagesArr.length > 2) {
      if (this.actualPage < 2) {
        this.lastIndex = this.pagesArr.length - 1;
        this.pagesToShow = [0, 1];
        this.isShowTopTrimmer = true;
        this.isShowBottomTrimmer = false;
      } else if (this.actualPage > this.lastIndex - 2) {
        this.pagesToShow = this.pagesArr.slice(-2);
        this.isShowTopTrimmer = false;
        this.isShowBottomTrimmer = true;
      } else {
        this.pagesToShow = this.pagesArr.slice(this.actualPage - 1, this.actualPage + 2);
        this.isShowBottomTrimmer = true;
        this.isShowTopTrimmer = true;
      }
    }
  }

  public onPrev(): void {
    this.isBlockEvent = true;
    this.currentPage.emit(this.actualPage);
    if (this.actualPage > 0) this.selectedPage(this.actualPage - 1);
    this.isBlockEvent = false;
  }

  public onNext(): void {
    this.isBlockEvent = true;
    if (this.actualPage < this.pagesArr.length - 1) this.selectedPage(this.actualPage + 1);
    this.currentPage.emit(this.actualPage + 1);
    this.isBlockEvent = false;
  }
}
