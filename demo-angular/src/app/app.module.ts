import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { ProductsComponent } from './list/products/products.component';
import { FontSizeEditoreComponent } from './font-size-editore/font-size-editore.component';
import { PetComponent } from './pet/pet.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { StarComponent } from './star/star.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductsComponent,
    FontSizeEditoreComponent,
    PetComponent,
    CalculatorComponent,
    StarComponent,
    CountdownTimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
