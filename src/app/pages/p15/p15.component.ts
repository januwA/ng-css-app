import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p15',
  template: `
    <div class="card-box">
      <div class="card">
        <div class="front">正</div>
        <div class="back">反</div>
      </div>
    </div>
  `,
  styleUrls: ['./p15.component.sass']
})
export class P15Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
