import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardShowPage } from './card-show.page';
import { PostShowPage } from './post-show/post-show.page';

const routes: Routes = [
  {
    path: ':id',
    component: CardShowPage
  },
  {
    path: 'post/:id',
    component: PostShowPage
  },
  {
    path: 'post-show',
    loadChildren: () => import('./post-show/post-show.module').then( m => m.PostShowPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardShowPageRoutingModule {}
