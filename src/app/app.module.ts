import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/page/home/home.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BottomNavComponent } from './component/nav/bottom-nav/bottom-nav.component';
import { FooterComponent } from './component/nav/footer/footer.component';
import { Card1Component } from './component/common/card/card1/card1.component';
import { Button1Component } from './component/common/button/button1/button1.component';
import { Button2Component } from './component/common/button/button2/button2.component';
import { SocialButtonComponent } from './component/common/button/social-button/social-button.component';
import { LabelDataComponent } from './component/common/block/label-data/label-data.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import {GreenhouseCardComponent} from './component/common/card/greenhouse-card/greenhouse-card.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BottomNavComponent,
        FooterComponent,
        Card1Component,
        Button1Component,
        Button2Component,
        SocialButtonComponent,
        LabelDataComponent,
        GreenhouseCardComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    ImageCropperModule,
    SocketIoModule.forRoot({
      url: 'http://localhost:8080', options: {}
    } as SocketIoConfig)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}
