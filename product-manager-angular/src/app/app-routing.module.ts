import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './products/product-list/product-list.component';
import {HeaderComponent} from './menu/header/header.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import {ProductEditComponent} from './products/product-edit/product-edit.component';
import {TimelinesComponent} from './timelines/timelines.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'home', component: HeaderComponent},
  {path: 'products/create', component: ProductAddComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},
  {path: 'timelines', component: TimelinesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
