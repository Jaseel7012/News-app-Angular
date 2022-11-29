import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsAppViewComponent } from './news-app-view/news-app-view.component';
import {HttpClientModule} from '@angular/common/http'
const myroute:Routes=[
  {
    path:'',
    'component':NewsAppViewComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NewsAppViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
