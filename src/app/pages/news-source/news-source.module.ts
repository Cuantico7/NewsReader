import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsSourcePageRoutingModule } from './news-source-routing.module';

import { NewsSourcePage } from './news-source.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsSourcePageRoutingModule
  ],
  declarations: [NewsSourcePage]
})
export class NewsSourcePageModule {}
