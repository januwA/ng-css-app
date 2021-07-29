import {
  OnDestroy,
  ViewChild,
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-p5',
  template: `
    <section class="side-box">
      <div class="side" id="side1" #side1>
        <img src="assets/p5/bg.webp" />
      </div>
      <div class="side" id="side2" #side2>
        <img src="assets/p5/bg.webp" />
      </div>
    </section>
    <div class="content">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quisquam
        eaque dolorem nemo adipisci animi ut natus sed deleniti facere,
        assumenda tempora neque a repellat. Officiis nemo autem voluptatibus
        minus!
      </p>
    </div>
  `,
  styleUrls: ['./p5.component.sass'],
})
export class P5Component implements OnDestroy, AfterViewInit {
  destory$ = new Subject();

  @ViewChild('side1')
  public side1!: ElementRef<HTMLDivElement>;

  @ViewChild('side2')
  public side2!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.destory$))
      .subscribe(() => {
        this.side1.nativeElement.style.left = -window.pageYOffset + 'px';
        this.side2.nativeElement.style.left = window.pageYOffset + 'px';
      });
  }

  ngOnDestroy(): void {
    this.destory$.next(0);
    this.destory$.unsubscribe();
  }
}
