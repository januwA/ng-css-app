import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p7',
  template: `
    <nav>
      <ul>
        <li
          *ngFor="let item of items"
          [ngClass]="{ active: item.active }"
          (click)="changeactive(item)"
        >
          Item
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./p7.component.sass'],
})
export class P7Component implements OnInit {
  items = new Array(8).fill(undefined).map(() => ({ active: false }));

  changeactive(e: any) {
    this.items.forEach((e) => (e.active = false));
    e.active = true;
  }

  constructor() {}

  ngOnInit(): void {
    this.items[0].active = true;
  }
}
