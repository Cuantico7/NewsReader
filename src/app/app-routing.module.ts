import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'news-source/:sourceId',
    loadChildren: () => import('./pages/news-source/news-source.module').then( m => m.NewsSourcePageModule)
  },
  {
    path: 'new-detail/:newsIndex',
    loadChildren: () => import('./pages/new-detail/new-detail.module').then( m => m.NewDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
