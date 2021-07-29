import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-p8',
  template: `
    <div class="skew1">
      <h2 class="layer">Hello</h2>
    </div>
    <div class="textbox">
      <div class="skew2">
        <h2 class="layer">Hello</h2>
      </div>
    </div>
  `,
  styleUrls: ['./p8.component.sass'],
})
export class P8Component implements OnInit, AfterViewInit, OnDestroy {
  destory$ = new Subject();
  layers?: NodeListOf<HTMLElement>;
  constructor() {}
  ngOnDestroy(): void {
    this.destory$.next(true);
    this.destory$.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.layers = document.querySelectorAll<HTMLElement>('.layer');
    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(throttleTime(10), takeUntil(this.destory$))
      .subscribe(this.parallaxText);
  }

  ngOnInit(): void {}

  parallaxText = (e: MouseEvent) => {
    this.layers?.forEach((layer) => {
      const x = (window.innerWidth - e.pageX * 2) / 2;
      layer.style.transform = `translateX(${x}px)`;
    });
  };
}
