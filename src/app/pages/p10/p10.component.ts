import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p10',
  template: `
    <div class="row">
      <div class="cell" *ngFor="let item of texts">{{ item }}</div>
    </div>
  `,
  styleUrls: ['./p10.component.sass'],
})
export class P10Component implements OnInit {
  texts = [
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        aliquam repellendus harum sequi repellat tenetur quaerat, esse eaque
        sapiente dignissimos tempora itaque iste recusandae autem ex quam
        aspernatur aut excepturi.`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        aliquam repellendus harum`,
    `Lorem, ipsum dolor sit amet`,
  ];
  constructor() {}

  ngOnInit(): void {}
}
