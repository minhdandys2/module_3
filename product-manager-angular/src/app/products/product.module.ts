import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductListComponent} from './product-list/product-list.component';
import {StarComponent} from '../star/star.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'create', component: ProductAddComponent},
  {path: 'edit/:id', component: ProductEditComponent},
];

@NgModule({
  declarations: [ProductListComponent, ProductAddComponent, ProductEditComponent, StarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ProductModule {
}
