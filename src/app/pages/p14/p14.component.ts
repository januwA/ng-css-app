import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p14',
  template: `
    <div class="container">
      <img class="cover" src="assets/p5/bg.webp" />
      <div class="text-box">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          recusandae. Velit, nesciunt. Reiciendis, quisquam aliquam, minus illo
          ad molestias voluptatibus recusandae expedita ipsam nihil voluptas
          deserunt. Tempora nihil aliquam harum!
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./p14.component.sass'],
})
export class P14Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
