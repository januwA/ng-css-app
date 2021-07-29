import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-list',
  template: `
    <ul>
      <li>
        <a [routerLink]="['/p-BaYd9Y_J71o']">css 波浪线效果</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./style.sass']
})
export class CssListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
