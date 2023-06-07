import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; //<---- Aqui
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpNewsService } from './api/http.newsservice';  ///<----- Aqui

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            HttpClientModule, ///<----- Aqui
            IonicModule.forRoot(), AppRoutingModule],
  providers: [
              HttpNewsService, //<------ Aqui 
              { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}
