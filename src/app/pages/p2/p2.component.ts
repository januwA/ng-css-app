import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-e1i-gpz2xq0',
  template: `
    <section class="banner">
      <div class="box content">
        <header>
          <a href="#" class="logo">Hmmmm.</a>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </header>
        <div class="content-box">
          <h2>Creative</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            doloremque asperiores cupiditate, iure accusamus porro. Blanditiis
            accusamus saepe facere, deleniti ex magnam! Odit vero animi nobis
            natus architecto nemo dolorem!
          </p>
          <a href="#" class="btn">Read More</a>
        </div>
        <div class="sci">
          <h3>Follow us on</h3>
          <li>
            <a href="#"
              ><i style="color: Dodgerblue;" class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i style="color: orange;" class="fab fa-canadian-maple-leaf"></i>
            </a>
          </li>
        </div>
      </div>
      <div class="box images">
        <div class="item" *ngFor="let src of images">
          <img [src]="src" />
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./p2.sass'],
})
export class P2Component implements OnInit {
  constructor() {}

  images = ['assets/p2/1.webp', 'assets/p2/2.webp', 'assets/p2/3.webp'];

  ngOnInit(): void {}
}
