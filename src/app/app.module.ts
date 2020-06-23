import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { AppRoutingModule } from './app-routing.module'
import { MitsogoModule } from './mitsogo/mitsogo.module'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MitsogoModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatSidenavModule  ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
