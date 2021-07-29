import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssListComponent } from './pages/css-list/css-list.component';
import { P1Component } from './pages/p1/p1.component';
import { P2Component } from './pages/p2/p2.component';
import { P3Component } from './pages/p3/p3.component';
import { P4Component } from './pages/p4/p4.component';
import { P5Component } from './pages/p5/p5.component';
import { P6Component } from './pages/p6/p6.component';
import { P7Component } from './pages/p7/p7.component';
import { P8Component } from './pages/p8/p8.component';
import { P9Component } from './pages/p9/p9.component';
import { P10Component } from './pages/p10/p10.component';
import { P11Component } from './pages/p11/p11.component';
import { P12Component } from './pages/p12/p12.component';
import { P13Component } from './pages/p13/p13.component';
import { P14Component } from './pages/p14/p14.component';
import { P15Component } from './pages/p15/p15.component';
import { P16Component } from './pages/p16/p16.component';

@NgModule({
  declarations: [
    AppComponent,
    CssListComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    P5Component,
    P6Component,
    P7Component,
    P8Component,
    P9Component,
    P10Component,
    P11Component,
    P12Component,
    P13Component,
    P14Component,
    P15Component,
    P16Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
