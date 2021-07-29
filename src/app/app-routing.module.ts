import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssListComponent } from './pages/css-list/css-list.component';
import { P1Component } from './pages/p1/p1.component';
import { P10Component } from './pages/p10/p10.component';
import { P11Component } from './pages/p11/p11.component';
import { P12Component } from './pages/p12/p12.component';
import { P13Component } from './pages/p13/p13.component';
import { P14Component } from './pages/p14/p14.component';
import { P15Component } from './pages/p15/p15.component';
import { P16Component } from './pages/p16/p16.component';
import { P2Component } from './pages/p2/p2.component';
import { P3Component } from './pages/p3/p3.component';
import { P4Component } from './pages/p4/p4.component';
import { P5Component } from './pages/p5/p5.component';
import { P6Component } from './pages/p6/p6.component';
import { P7Component } from './pages/p7/p7.component';
import { P8Component } from './pages/p8/p8.component';
import { P9Component } from './pages/p9/p9.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CssListComponent,
  },
  {
    path: 'BaYd9Y_J71o',
    data: { text: 'CSS 波浪线效果' },
    component: P1Component,
  },
  {
    path: 'bE1iGPZ2xq0',
    data: { text: 'html + css 制作响应式网站' },
    component: P2Component,
  },
  {
    path: '03xiOZwF1uA',
    data: { text: 'CSS 创建结帐表单' },
    component: P3Component,
  },
  {
    path: 'G4CRBvx-pac',
    data: { text: 'CSS 水波文字动画' },
    component: P4Component,
  },
  {
    path: 'bzZuOcyZ-Gw',
    data: { text: 'CSS和JS 滚动时拆分图片' },
    component: P5Component,
  },
  {
    path: 'jMbWDcc5oNc',
    data: { text: 'CSS 技巧' },
    component: P6Component,
  },
  {
    path: 'pubrK_AmqRg',
    data: { text: 'CSS和JS 导航栏 活动选项卡向外弯曲' },
    component: P7Component,
  },
  {
    path: 'H7AAuNIPL7Q',
    data: { text: 'CSS和JS 文本视觉差效果' },
    component: P8Component,
  },
  {
    path: 'zib5zqmjee4',
    data: { text: 'CSS 在鼠标悬停时旋转文本' },
    component: P9Component,
  },
  {
    path: 'oNPt417ONLM',
    data: { text: 'CSS 创建等高列表' },
    component: P10Component,
  },
  {
    path: 'tla17buc3tw',
    data: { text: 'CSS 文本 loading 动画' },
    component: P11Component,
  },
  {
    path: 'MH7rI6vuasE',
    data: { text: 'CSS Hover 动画' },
    component: P12Component,
  },
  {
    path: 'lzSqcZXdbeM',
    data: { text: 'CSS 3D 文本' },
    component: P13Component,
  },
  {
    path: 'lYTjMJw7lUA',
    data: { text: 'CSS 图片Hover效果' },
    component: P14Component,
  },
  {
    path: 'ajFK1WKxVDo',
    data: { text: 'CSS 3d 卡片翻转动画' },
    component: P15Component,
  },

  {
    path: '6zXxecHE7RE',
    data: { text: 'css 心形' },
    component: P16Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
