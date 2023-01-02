import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { ComponentEnum, COMPONENTS_NAVIGATION } from '../../constants/components.constants';

@Component({
  selector: 'app-section-components',
  templateUrl: './section-components.component.html',
  styleUrls: ['./section-components.component.scss']
})
export class SectionComponentsComponent implements AfterViewInit, OnDestroy {
  public title: string = 'Componentes';
  public componentsNavigation = COMPONENTS_NAVIGATION;
  public isComponentTemplate = true;
  private readonly onDestroy$ = new Subject<void>();

  @ViewChild('componentTitle') componentTitle!: ElementRef;
  @ViewChild('childComponent') childComponent!: ElementRef;

  constructor(private readonly router: Router, private readonly renderer: Renderer2) {
    this.router.events
      .pipe(
        takeUntil(this.onDestroy$),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe({
        next: (event: Event) => {
          event = event as RouterEvent;
          const url = event.url.split('/').splice(1);
          window.scrollTo({ top: 0, behavior: 'smooth' });

          const fragment = url[2]?.split('#')[1];

          if (fragment) {
            const element = document.querySelector(`#${fragment}`) as HTMLElement;
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              window.scrollBy(0, element.getBoundingClientRect().top - 120);
              history.pushState({}, '', url[0] + '/' + url[1] + '/' + url[2].split('#')[0]);
            }
          }

          url.forEach((item) => {
            if (item !== 'components') {
              this.isComponentTemplate = false;
              const camelCaseItem = item.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
              const component = camelCaseItem as keyof typeof ComponentEnum;

              this.title = ComponentEnum[component] ?? this.title;
              if (this.componentTitle) {
                this.renderer.removeClass(this.componentTitle?.nativeElement, 'no-scroll');
              }
            } else {
              if (this.componentTitle) {
                this.renderer.addClass(this.componentTitle?.nativeElement, 'no-scroll');
              }
              this.isComponentTemplate = true;
              this.title = 'Componentes';
            }
          });
        }
      });
  }

  ngAfterViewInit(): void {
    if (this.componentTitle.nativeElement.textContent === 'Componentes') {
      this.renderer.addClass(this.componentTitle?.nativeElement, 'no-scroll');
    }
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll() {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const childComponent = this.childComponent?.nativeElement as HTMLElement;
    const oNavHorizontal = childComponent?.querySelector('o-nav-horizontal')!;

    if (oNavHorizontal) {
      if (verticalOffset > 40) {
        this.renderer.addClass(this.componentTitle?.nativeElement, 'scroll');
        this.renderer.addClass(oNavHorizontal, 'scroll');
      }

      if (verticalOffset < 12) {
        this.renderer.removeClass(this.componentTitle?.nativeElement, 'scroll');
        this.renderer.removeClass(oNavHorizontal, 'scroll');
      }
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
