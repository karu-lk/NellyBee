import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import {SlickModule} from 'ngx-slick';

import {appRoutingProviders, routing} from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ShopComponent } from './shop/shop.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewArrivalsComponent,
    ShopComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
    SlickModule.forRoot()
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
