import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsSourcePage } from './news-source.page';

const routes: Routes = [
  {
    path: '',
    component: NewsSourcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsSourcePageRoutingModule {}
