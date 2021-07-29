import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p9',
  template: `
    <div class="btn">
      <span class="text" *ngFor="let t of chars">{{ t }}</span>
    </div>
  `,
  styleUrls: ['./p9.component.sass'],
})
export class P9Component implements OnInit {
  chars = 'hello'.split('');
  constructor() {}

  ngOnInit(): void {}
}
