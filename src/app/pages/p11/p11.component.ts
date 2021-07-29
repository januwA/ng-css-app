import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p11',
  template: `
    <div class="row">
      <span class="item" *ngFor="let item of loading">{{ item }}</span>
    </div>
  `,
  styleUrls: ['./p11.component.sass'],
})
export class P11Component implements OnInit {
  loading = 'Loading'.toUpperCase().split('');
  constructor() {}

  ngOnInit(): void {}
}
