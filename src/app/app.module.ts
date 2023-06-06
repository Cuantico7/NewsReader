import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; //<---- Aqui
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './api/http.service';  ///<----- Aqui

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            HttpClientModule, ///<----- Aqui
            IonicModule.forRoot(), AppRoutingModule],
  providers: [
              HttpService, //<------ Aqui 
              { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}
