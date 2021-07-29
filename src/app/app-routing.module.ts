import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssListComponent } from './pages/css-list/css-list.component';
import { PBaYd9YJ71oComponent } from './pages/p-ba-yd9-y-j71o/p-ba-yd9-y-j71o.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CssListComponent,
  },
  {
    path: 'p-BaYd9Y_J71o',
    component: PBaYd9YJ71oComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
