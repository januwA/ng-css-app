import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssListComponent } from './pages/css-list/css-list.component';
import { PBaYd9YJ71oComponent } from './pages/p-ba-yd9-y-j71o/p-ba-yd9-y-j71o.component';

@NgModule({
  declarations: [
    AppComponent,
    CssListComponent,
    PBaYd9YJ71oComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
