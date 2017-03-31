import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpModule} from '@angular/http';


import { AppComponent }  from './app.component';
import {WelcomeComponent} from './home/welcome.component';

import {ProductModule} from './products/product.module';

import {AppRoutingModule} from './app-routing.module';



@NgModule({
  imports: [ BrowserModule ,HttpModule, ProductModule,AppRoutingModule],
 
   declarations: [ AppComponent,WelcomeComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
