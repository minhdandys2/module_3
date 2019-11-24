import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './products/product-list/product-list.component';
import {HeaderComponent} from './menu/header/header.component';
import {ProductAddComponent} from './products/product-add/product-add.component';


const routes: Routes = [
  {path: 'products/list', component: ProductListComponent},
  {path: 'home', component: HeaderComponent},
  {path: 'products/create', component: ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
