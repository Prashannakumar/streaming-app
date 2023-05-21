import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'video',
        loadChildren: () =>
          import('./video-page/video-page.module').then((m) => m.VideoPageModule),
      },
    ],
  },
];

export const AppRouting = RouterModule.forRoot(routes);
