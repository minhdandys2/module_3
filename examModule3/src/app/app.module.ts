import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AwesomeModule} from './awesomes/awesome.module';
import { MenuComponent } from './core/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
