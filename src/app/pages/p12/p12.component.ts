import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p12',
  template: `
    <div class="row">
      <div class="item" *ngFor="let item of texts">
        <span>{{ item }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./p12.component.sass'],
})
export class P12Component implements OnInit {
  texts = 'hello'.toUpperCase().split('');
  constructor() {}

  ngOnInit(): void {}
}
