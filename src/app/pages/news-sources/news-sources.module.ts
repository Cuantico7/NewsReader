import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsSourcesPageRoutingModule } from './news-sources-routing.module';

import { NewsSourcesPage } from './news-sources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsSourcesPageRoutingModule
  ],
  declarations: [NewsSourcesPage]
})
export class NewsSourcesPageModule {}
