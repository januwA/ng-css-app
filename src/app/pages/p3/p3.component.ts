import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p3',
  template: `
    <div class="payent">
      <div class="bg"></div>
      <div class="card">
        <i class="chip fab fa-cc-paypal"></i>
        <div class="logo"></div>
        <div class="bank-name" contenteditable="true">Bank Name</div>
        <form>
          <div class="input-box">
            <span>Card No.</span>
            <input
              type="text"
              placeholder="0123 4567 89012345"
              maxlength="19"
            />
          </div>

          <div class="input-box">
            <span>Card Holder</span>
            <input type="text" placeholder="XXX" />
          </div>

          <div class="group">
            <div class="input-box">
              <span>Valid Thru</span>
              <input type="text" placeholder="MM/YY" maxlength="5" />
            </div>
            <div class="input-box">
              <span>CCV</span>
              <input type="password" placeholder="***" maxlength="4" />
            </div>
          </div>
        </form>
      </div>

      <button class="btn">Confirm and Pay</button>
    </div>
  `,
  styleUrls: ['./p3.component.sass'],
})
export class P3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
