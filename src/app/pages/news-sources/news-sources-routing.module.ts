import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsSourcesPage } from './news-sources.page';

const routes: Routes = [
  {
    path: '',
    component: NewsSourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsSourcesPageRoutingModule {}
