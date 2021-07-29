import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p4',
  template: `
    <div class="liquid">
      <h2 *ngFor="let e of [1, 1, 1, 1]">Water</h2>
    </div>
  `,
  styleUrls: ['./p4.component.sass'],
})
export class P4Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
