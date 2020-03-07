import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PackagesPrintComponent} from "./packages-print/packages-print.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/material.module";
import { ScrollingPageComponent } from './scrolling-page/scrolling-page.component';
import { LayoutComponent } from './layout/layout.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    PackagesPrintComponent,
    ScrollingPageComponent,
    LayoutComponent
  ],
  imports: [
    InfiniteScrollModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
