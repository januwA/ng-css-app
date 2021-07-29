import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-css-list',
  template: `
    <ul>
      <ng-container *ngFor="let it of routes">
        <li *ngIf="it.data">
          <a [routerLink]="it.path">{{ it.data?.text }}</a>
        </li>
      </ng-container>
    </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./style.sass'],
})
export class CssListComponent implements OnInit {
  constructor() {}

  routes: Routes = [];

  async ngOnInit() {
    const { routes } = await import('../../app-routing.module');
    this.routes = routes;
  }
}
